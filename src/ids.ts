import { ingameIds } from './bgs-client'
import { IngameIds } from './bgs-client/types'

let ids: IngameIds = {}


const init = async () => {
  ids = await ingameIds()
  return ids
}

const resolve = (category: string, field: string) => ids[category][field]?.name || field

export default ids
export { init, resolve }

