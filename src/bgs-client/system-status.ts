import client from './client'
import { BgsApiResponse, SystemStatus } from './types'
import config from '../config'
import { NotFoundError } from '../errors'

export default async (args: string) => {

  const name = args.length ? args : config().defaultSystem

  const { data } = await client.get<BgsApiResponse<SystemStatus>>('/systems', {
    params: { name }
  })

  if (!data.docs.length) {
    throw new NotFoundError('Response object was empty',)
  }

  return data.docs[0]

}