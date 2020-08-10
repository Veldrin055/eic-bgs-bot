import client from './client'
import { IngameIds } from './types'

export default async () => {

  try {
    const { data } = await client.get<IngameIds>('https://elitebgs.app/ingameids/all')

    if (!data) {
      throw new Error('Response object was empty')
    }

    return data
  } catch (err) {
    console.error(err)
    throw new Error()
  }

}