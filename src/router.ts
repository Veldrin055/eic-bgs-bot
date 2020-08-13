import { Message } from 'discord.js'
import commands from './commands'

export default async (message: Message, { command, commandArguments }: { command: string, commandArguments: string[] }) => {
  
  const cmd = commands.find(({ name }) => name === command)
  
  if (cmd) {
    const { channel } = message

    try {
      channel.startTyping()

      await cmd.exec(message, commandArguments)

    } catch(err) {
      console.error(`Command ${command} failed.`, err)
      message.channel.send("I'm terribly sorry Commander, something went awry whilst servicing your request.")
    } finally {
      channel.stopTyping()
    }

  } else {
    message.channel.send("I'm afraid I don't understand that Commander. Do you need some `help`?")
  }

}