import { Message } from 'discord.js'
import factionStatus from '../bgs-client/faction-status'
import { capitalize, percentage } from '../util'
import { FactionPresense } from '../bgs-client/types'

const fieldify = (system: FactionPresense) => {
  const name = capitalize(system.system_name)
  const value = [
    { name: 'State', value: system.state },
    { name: 'Happiness', value: system.happiness },
    { name: 'Influence', value: `${percentage(system.influence)}%` },
    { name: 'Active States', value: system.active_states.map(capitalize).join(',') || 'None' },
    { name: 'Pending States', value: system.pending_states.map(capitalize).join(',') || 'None' },
    { name: 'Recovering States', value: system.recovering_states.map(capitalize).join(',') || 'None' },
  ].map(({ name: n, value: v }) => `**${n}**: ${v}`).join('\n')

  return { name, value }
}

const exec = async ({ channel }: Message) => {
  const status = await factionStatus()

  const fields = status.faction_presence.reduce((acc, system) => {
    return [
      ...acc,
      fieldify(system),
      { name: '\u200B', value: '\u200B' },
    ]
  }, [] as readonly { name: string, value: string }[])

  const embed = {
    color: 0x0099ff,
	  title: 'EIC Status',
	  description: `${capitalize(status.allegiance)} / ${capitalize(status.government)}`,
	  fields,
    
  }

  channel.send({ embed })
}

export default {
  name: 'faction-status',
  exec,
}