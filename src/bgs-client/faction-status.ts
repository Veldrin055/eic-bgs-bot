import client, { factionId } from './client'
import { BgsApiResponse, FactionStatus } from '.'

export default async () => {
  try {
    const { data } = await client.get<BgsApiResponse<FactionStatus>>('/factions', {
      params: { id: factionId }
    })
    return data.docs
  }
}