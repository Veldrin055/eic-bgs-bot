import { Message } from 'discord.js'
import commands from './commands'
import { NotFoundError } from './errors'

export default async (message: Message, { command, commandArguments }: { command: string, commandArguments: string[] }) => {
  
  const cmd = commands.find(({ name }) => name === command)

  const { channel } = message
  await channel.startTyping()

  if (cmd) {

    try {

      await cmd.exec(message, commandArguments)

    } catch(err) {
      if (err instanceof NotFoundError) {
        return message.channel.send(`Awfully sorry Commander, I can't find a ${command} named ${commandArguments.join(' ')}`)
      }
      console.error(`Command ${command} failed.`, err)
      await message.channel.send("I'm terribly sorry Commander, something went awry whilst servicing your request.")
    } finally {
      channel.stopTyping()
    }

  } else {
    return message.channel.send("I'm afraid I don't understand that Commander. Do you need some `help`?")
  }

}