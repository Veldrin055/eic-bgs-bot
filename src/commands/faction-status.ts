import factionStatus from '../bgs-client/faction-status'
import { capitalize, percentage } from '../util'
import { Command } from './types'
import { FactionPresense, State } from '../bgs-client/types'
import { resolve } from '../ids'

const formatStates = (states: State[]) => {
  if (!states.length) {
    return 'None'
  }
  // todo trends

  return states.map(({ state }) => capitalize(state)).join(', ')
}


const fieldify = (system: FactionPresense) => {
  const name = capitalize(system.system_name)
  const value = [
    // todo last updated
    { name: 'State', value: resolve('state', system.state) },
    { name: 'Happiness', value: resolve('happiness', system.happiness) },
    { name: 'Influence', value: `${percentage(system.influence)}%` },
    { name: 'Active States', value: formatStates(system.active_states) },
    { name: 'Pending States', value: formatStates(system.pending_states) },
    { name: 'Recovering States', value: formatStates(system.recovering_states) },
  ].map(({ name: n, value: v }) => `**${n}**: ${v}`).join('\n')

  return { name, value }
}

export default {
  name: 'faction',

  help: 'Retrieve the status for a faction\nUsage: `faction <faction name>`\neg `faction east india company`',

  exec: async ({ channel }, args) => {
    const status = await factionStatus(args.join(' '))
  
    const fields = status.faction_presence.reduce((acc, system) => {
      return [
        ...acc,
        fieldify(system),
        { name: '\u200B', value: '\u200B' },
      ]
    }, [] as { name: string, value: string }[])
  
    const embed = {
      color: 0x0099ff,
      title: `Status Report - ${status.name}`,
      description: `${capitalize(status.allegiance)} / ${capitalize(status.government)}`,
      fields,
    }
  
    channel.send({ embed })
  }
} as Command