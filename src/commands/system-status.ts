import { capitalize, percentage } from '../util'
import { Command } from './types'
import systemStatus from '../bgs-client/system-status'
import { resolve } from '../ids'

export default {
  name: 'system',
  
  help: 'Retrieve the status for a system\nUsage: `system <system name>`\neg `system LTT 1349`',

  exec: async ({ channel }, args) => {
    const system = await systemStatus(args.join(' '))
  
    const embed = {
      color: 0x0099ff,
      title: `System Report - ${system.name}`,
      description: `A ${capitalize(system.allegiance)} / ${capitalize(resolve('government', system.government))} system.
      The primary economy is ${resolve('economy', system.primary_economy)} with a population of ${system.population}`,
      // todo - factions
    }
  
    channel.send({ embed })
  }
} as Command