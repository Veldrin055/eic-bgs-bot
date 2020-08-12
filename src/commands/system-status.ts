import { capitalize, percentage } from '../util'
import { Command } from './types'
import { systemStatus, factionStatus } from '../bgs-client'
import { resolve } from '../ids'
import { FactionStatus, SystemStatus } from '../bgs-client/types'
import { fieldify } from './faction-status'

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
      fields: [
        { name: 'Factions', value: 'One moment whilst I pull up the faction specifics...'}
      ]
    }
    
    const message = await channel.send({ embed })

    const factions = await Promise.all(system.factions.map(({ name }) => factionStatus(name)))
    const factionStatuses = formatFactions(factions, system).reduce((acc, faction) => {
      return [
        ...acc,
        faction,
        { name: '\u200B', value: '\u200B' },
      ]
    }, [] as { name: string, value: string }[])

    message.edit({embed: { ...embed, fields: factionStatuses.slice(0, -1) }})
  }
} as Command

const formatFactions = (factions: FactionStatus[], { name }: SystemStatus) => factions.map(faction => {
  const factionPresence = faction.faction_presence.find(({ system_name }) => system_name.toLowerCase() === name.toLowerCase()) 
  const value = factionPresence ? fieldify(factionPresence).value : 'Unable to retrieve system status'

  return {
    name: faction.name,
    value,
  }
})