import client, { factionId } from './client'
import { BgsApiResponse, FactionStatus } from './types'

export default async () => {
  try {
    const { data } = await client.get<BgsApiResponse<FactionStatus>>('/factions', {
      params: { id: factionId }
    })

    if (!data.docs.length) {
      throw new Error('Response object was empty')
    }

    return data.docs[0]
  } catch (err) {
    console.error(err)
    throw new Error()
  }
}