import { Command } from './types'
import data from '../data/codex.json'

const codex: { [key: string]: string | undefined } = { ...data }

export default {
  name: 'codex',
  help: "Provides useful reference information on the BGS",
  exec: async ({ channel }, args) => {

    const search = args.join(' ')
    const result = codex[search] || `I don't have any entries for '${search}'`
    
    await channel.send(result)
  },

} as Command