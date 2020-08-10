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

export type FactionPresense = {
  system_name: string
  state: string
  influence: number
  happiness: string
  active_states: string[]
  pending_states: string[]
  recovering_states: string[]
  conflicts: string[]
  updated_at: Date
  system_id: string
}