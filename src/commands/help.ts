import { Command } from './types'
import commands from './'

export default {
  name: 'help',
  help: "You're reading it.",
  exec: async (message) => {

    const helpTexts = commands.map(({ name, help }) => `**${name}**: ${help}`)

    await message.channel.send(helpTexts.join('\n\n'))
  },

} as Command