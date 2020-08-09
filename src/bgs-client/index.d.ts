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
}