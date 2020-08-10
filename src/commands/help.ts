import { Command } from './types'
import commands from './'

const helpTexts = commands.map(({ name, help }) => `**${name}**: ${help}`)

export default {
  name: 'help',
  help: "You're reading it.",
  exec: async (message) => {
    await message.channel.send(helpTexts.join('\n'))
  },

} as Command