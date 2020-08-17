import { Message } from 'discord.js'
import commands from './commands'
import { NotFoundError } from './errors'

export default async (message: Message, { command, commandArguments }: { command: string, commandArguments: string[] }) => {
  
  const cmd = commands.find(({ name }) => name === command)

  const { channel } = message

  if (cmd) {

    try {
      channel.startTyping()
      await cmd.exec(message, commandArguments)

    } catch(err) {
      if (err instanceof NotFoundError) {
        message.channel.send(`Awfully sorry Commander, I can't find a ${command} named ${commandArguments.join(' ')}`)
        return
      }
      if (err.code === 'ECONNABORTED') {
        await message.channel.send('It appears our friends on the API side are taking longer to respond than usual. Perhaps try again later.')
        return
      }
      console.error(`Command ${command} failed.`, err)
      await message.channel.send("I'm terribly sorry Commander, something went awry whilst servicing your request.")
    } finally {
      channel.stopTyping()
    }

  } else {
    message.channel.send("I'm afraid I don't understand that Commander. Do you need some `help`?")
  }

}