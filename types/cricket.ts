export interface PlayCricketMatch {
  id: number;
  status: string;
  published: string;
  last_updated: string;
  league_name: string;
  league_id: number;
  competition_name: string;
  competition_id: number;
  competition_type: string;
  match_type: string;
  game_type: string;
  season: string;
  match_date: string;
  match_time: string;
  ground_name: string;
  ground_id: number;
  ground_latitude: string;
  ground_longitude: string;
  home_team_name: string;
  home_team_id: number;
  home_club_name: string;
  home_club_id: number;
  away_team_name: string;
  away_team_id: number;
  away_club_name: string;
  away_club_id: number;
  umpire_1_name: string;
  umpire_2_name: string;
  umpire_3_name: string;
  referee_name: string;
  scorer_1_name: string;
  scorer_2_name: string;
}

export interface PlayCricketInning {
  team_batting_name: string;
  team_batting_id: number;
  runs: string;
  wickets: string;
  overs: string;
  declared: boolean;
  forfeited: boolean;
  revised_target_runs: string;
  revised_target_overs: string;
  revised_target_balls: string;
  bat: unknown[];
  bowl: unknown[];
  fow: unknown[];
}

export interface PlayCricketResult {
  id: number;
  status: string;
  published: string;
  last_updated: string;
  league_name: string;
  league_id: number;
  competition_name: string;
  competition_id: number;
  competition_type: string;
  match_type: string;
  game_type: string;
  season: string;
  match_date: string;
  match_time: string;
  ground_name: string;
  ground_id: number;
  home_team_name: string;
  home_team_id: number;
  home_club_name: string;
  home_club_id: number;
  away_team_name: string;
  away_team_id: number;
  away_club_name: string;
  away_club_id: number;
  result: string;
  result_description: string;
  result_applied_to: string;
  toss_won_by_team_id: number;
  toss: string;
  batted_first: number;
  innings: PlayCricketInning[];
  points: { team_id: number; points: number; penalty: number }[];
}

export interface Fixture {
  id: number;
  date: string;
  time: string;
  rawDate: Date;
  team: string;
  opponent: string;
  venue: string;
  competition: string;
  isHome: boolean;
}

export interface MatchResult {
  id: number;
  date: string;
  rawDate: Date;
  team: string;
  opponent: string;
  result: string;
  ourScore: string;
  theirScore: string;
  competition: string;
  isWin: boolean;
}
