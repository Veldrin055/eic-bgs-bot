import client from './client'
import { Tick } from './types'

export default async () => {

  try {
    const { data } = await client.get<Tick[]>('/ticks')

    if (!data.length) {
      throw new Error('Response object was empty')
    }

    return data[0]
  } catch (err) {
    console.error(err)
    throw new Error()
  }

}