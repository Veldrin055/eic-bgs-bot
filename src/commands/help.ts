import { Command } from './types'
import commands from './'

export default {
  name: 'help',
  help: "You're reading it.",
  exec: async (message) => {

    const helpTexts = commands.map(({ name, help }) => `**${name}**: ${help}`)

    await message.channel.send(
      `👋 Hello there ${message.author.username}. I'm here to help advise on the state of the BGS in EIC space.
I have the following commands available for your use:    
${helpTexts.join('\n\n')}`)
  },

} as Command