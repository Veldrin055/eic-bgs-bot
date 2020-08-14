import client from './client'
import { BgsApiResponse, FactionStatus } from './types'

import config from '../config'

export default async (args: string) => {

  const name = args.length ? args : config().defaultFaction

  try {
    const { data } = await client.get<BgsApiResponse<FactionStatus>>('/factions', {
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