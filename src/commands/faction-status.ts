import * as _ from 'lodash'
import { factionStatus, tick}  from '../bgs-client'
import { capitalize, percentage, formatTick, formatTrend, decorations } from '../util'
import { Command } from './types'
import { FactionPresense, State } from '../bgs-client/types'
import { resolve } from '../data/ids'

const formatStates = (states: State[]) => {
  if (!states.length) {
    return 'None'
  }

  return states.map(({ state, trend }) => `${resolve('state', state)}${formatTrend(trend)}`).join(', ')
}

 export const fieldify = (system: FactionPresense, tickUpdate: string) => {
  const name = `${capitalize(system.system_name)} ${decorations(system).join('')}`
  
  // yaml formats nicely for how we want to present
  const value = `\`\`\`yaml
State: ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ${resolve('state', system.state)}
Happiness: ​ ​ ​ ​ ​ ​ ​ ​ ​ ${resolve('happiness', system.happiness)}
Influence: ​ ​ ​ ​ ​ ​ ​ ​ ​ ${percentage(system.influence)}%
Active States: ​ ​ ​ ​ ​ ${formatStates(system.active_states)}
Pending States: ​ ​ ​ ​ ${formatStates(system.pending_states)}
Recovering States: ​ ${formatStates(system.recovering_states)}
Last Updated:       ${formatTick(system.updated_at, tickUpdate)}
\`\`\``

  return { name, value }
}

export default {
  name: 'faction',

  help: 'Retrieve the status for a faction\nUsage: `faction <faction name>`\neg `faction east india company`',

  exec: async ({ channel }, args) => {
    const status = await factionStatus(args.join(' '))
    const { updated_at: tickUpdate } = await tick()
  
    const systems = status.faction_presence.reduce((acc, system) => {
      return [
        ...acc,
        fieldify(system, tickUpdate),
        { name: '\u200B', value: '\u200B' },
      ]
    }, [] as { name: string, value: string }[])

    _.chunk(systems, 24)
      .map( async (fields, i) => {
        const page = i > 0 ? ` Page ${i + 1}` : ''
        const embed = {
          color: 0x0099ff,
          title: `Status Report - ${status.name}${page}`,
          description: `${capitalize(status.allegiance)} / ${capitalize(status.government)}`,
          fields: fields.slice(0, -1),
        }
      
        await channel.send({ embed })  
      })
  }
} as Command