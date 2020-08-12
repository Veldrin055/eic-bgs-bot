export type IngameIds = { [key: string ]: { 
    [key: string]: { name: string }
  } 
}

export type BgsApiResponse<T> = {
  docs: T[]
  total: number
  limit: number
  page: number
  pages: number
}

export type FactionStatus = {
  _id: string
  name: string
  updated_at: Date
  government: string
  allegiance: string
  faction_presence: FactionPresense[]
}

export type State = {
  state: string
  trend?: number
}

export type Conflict = {
  type: string
  status: string
  opponent_name: string
  stake: string
  days_won: number
}

export type FactionPresense = {
  system_name: string
  state: string
  influence: number
  happiness: string
  active_states: State[]
  pending_states: State[]
  recovering_states: State[]
  conflicts: Conflict[]
  updated_at: Date
}

export type SystemStatus = {
  _id: string
  x: number
  y: number
  z: number
  name: string
  government: string
  allegiance: string
  state: string
  security: string
  population: number
  primary_economy: string
  secondary_economy: string
  conflicts: string[]
  controlling_minor_faction: string
  updated_at: Date
  factions: { name: string }[]
}