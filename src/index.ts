import * as discord from 'discord.js'
import config from './config.json'
import messageRouter from './router'
import { init } from './ids'

const bot = new discord.Client()

bot.once('ready', () => console.log('Ready for service, Commander.'))

init()

bot.login(config.token).catch(err => {
  console.error('Critical issue starting Discord bot', err)
  process.exit(1)
})
  
bot.on('message', async (message) => {
  if (message.mentions.users.some(({ id }) => id === bot.user?.id)) {
    messageRouter(message, getCommandArguments(message))  
  }
})

const getCommandArguments = (message: discord.Message) => {
  const messageString = message.content.replace(new RegExp(`<@!?${bot.user?.id}>`), "").trim()
  const messageArray = messageString.split(" ")
  const command = messageArray[0].toLowerCase()
  const commandArguments = messageArray.length > 1 ? messageArray.slice(1, messageArray.length): []

  return { command, commandArguments }
}