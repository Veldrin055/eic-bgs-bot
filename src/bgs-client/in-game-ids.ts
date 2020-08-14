import client from './client'
import { IngameIds } from './types'
import { NotFoundError } from '../errors'

export default async () => {

  const { data } = await client.get<IngameIds>('https://elitebgs.app/ingameids/all')

  if (!data) {
    throw new NotFoundError('Response object was empty',)
  }

  return data

}