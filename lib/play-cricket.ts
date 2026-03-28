import "server-only";
import type {
  PlayCricketMatch,
  PlayCricketResult,
  Fixture,
  MatchResult,
} from "@/types/cricket";

const SITE_ID = 19891;
const CLUB_NAME = "London Desperados";
const API_BASE = "https://play-cricket.com/api/v2";

function getApiToken(): string {
  const token = process.env.PLAY_CRICKET_API_TOKEN;
  if (!token) {
    throw new Error("PLAY_CRICKET_API_TOKEN environment variable is not set");
  }
  return token;
}

function parsePlayCricketDate(dateStr: string): Date {
  // Play Cricket dates are in "dd/mm/yyyy" format
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day);
}

function formatDisplayDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatScore(innings: PlayCricketResult["innings"], teamId: number): string {
  const inning = innings.find((i) => i.team_batting_id === teamId);
  if (!inning) return "N/A";

  const runs = inning.runs || "0";
  const wickets = inning.wickets || "0";
  const overs = inning.overs || "0";

  if (parseInt(wickets) >= 10) {
    return `${runs} all out (${overs})`;
  }
  return `${runs}/${wickets} (${overs})`;
}

function isClubMatch(clubName: string): boolean {
  return clubName.toLowerCase().includes(CLUB_NAME.toLowerCase());
}

function normalizeFixture(match: PlayCricketMatch): Fixture {
  const isHome = isClubMatch(match.home_club_name);
  const opponent = isHome ? match.away_club_name : match.home_club_name;
  const team = isHome ? match.home_team_name : match.away_team_name;
  const rawDate = parsePlayCricketDate(match.match_date);

  return {
    id: match.id,
    date: formatDisplayDate(rawDate),
    time: match.match_time || "TBC",
    rawDate,
    team: team.replace(/London Desperados\s*-?\s*/i, "").trim() || "1st XI",
    opponent,
    venue: isHome ? match.ground_name || "Home Ground" : "Away",
    competition: match.competition_name || match.league_name || "League",
    isHome,
  };
}

function normalizeResult(match: PlayCricketResult): MatchResult {
  const isHome = isClubMatch(match.home_club_name);
  const opponent = isHome ? match.away_club_name : match.home_club_name;
  const team = isHome ? match.home_team_name : match.away_team_name;
  const rawDate = parsePlayCricketDate(match.match_date);

  const ourTeamId = isHome ? match.home_team_id : match.away_team_id;
  const theirTeamId = isHome ? match.away_team_id : match.home_team_id;

  const resultDesc = match.result_description || match.result || "";
  const isWin =
    resultDesc.toLowerCase().includes("won") &&
    (match.result_applied_to
      ? (isHome && match.result_applied_to === "home") ||
        (!isHome && match.result_applied_to === "away")
      : true);

  return {
    id: match.id,
    date: formatDisplayDate(rawDate),
    rawDate,
    team: team.replace(/London Desperados\s*-?\s*/i, "").trim() || "1st XI",
    opponent,
    result: resultDesc,
    ourScore: formatScore(match.innings || [], ourTeamId),
    theirScore: formatScore(match.innings || [], theirTeamId),
    competition: match.competition_name || match.league_name || "League",
    isWin,
  };
}

export async function fetchFixtures(
  season?: number
): Promise<Fixture[]> {
  const year = season || new Date().getFullYear();
  const token = getApiToken();

  const url = `${API_BASE}/matches.json?site_id=${SITE_ID}&season=${year}&api_token=${token}`;

  const res = await fetch(url, { next: { revalidate: 900 } });

  if (!res.ok) {
    throw new Error(`Play Cricket API error: ${res.status}`);
  }

  const data = await res.json();
  const matches: PlayCricketMatch[] = data.matches || [];

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  return matches
    .map(normalizeFixture)
    .filter((f) => f.rawDate >= now)
    .sort((a, b) => a.rawDate.getTime() - b.rawDate.getTime());
}

export async function fetchResults(
  season?: number
): Promise<MatchResult[]> {
  const year = season || new Date().getFullYear();
  const token = getApiToken();

  const url = `${API_BASE}/result_summary.json?site_id=${SITE_ID}&season=${year}&api_token=${token}`;

  const res = await fetch(url, { next: { revalidate: 900 } });

  if (!res.ok) {
    throw new Error(`Play Cricket API error: ${res.status}`);
  }

  const data = await res.json();
  const matches: PlayCricketResult[] = data.result_summary || [];

  return matches
    .map(normalizeResult)
    .filter((r) => r.result && r.result.trim() !== "")
    .sort((a, b) => b.rawDate.getTime() - a.rawDate.getTime());
}
