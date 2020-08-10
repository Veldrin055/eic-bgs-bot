import client, { factionId } from './client'
import { BgsApiResponse, SystemStatus } from './types'

export default async (args: string) => {

  const name = args.length ? args : 'LTT 1349'

  try {
    const { data } = await client.get<BgsApiResponse<SystemStatus>>('/systems', {
      params: { name }
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