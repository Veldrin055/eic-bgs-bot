import * as discord from 'discord.js'
import routeMessage from './router'
import { init } from './data/ids'
import config, { loadConfig } from './config'

loadConfig()
init().catch(err => console.error('Failed to retrieve in game IDs', err))

const bot = new discord.Client()

bot.once('ready', () => console.log('Ready for service, Commander.'))

const token = config().token

if (!token) {
  console.error('Missing Discord bot token. Did you forget to add it to config.json?')
  process.exit(1)
}

bot.login(config().token).catch(err => {
  console.error('Critical issue starting Discord bot', err)
  process.exit(1)
})
  
bot.on('message',  (message) => {
  if (message.mentions.users.some(({ id }) => id === bot.user?.id)) {
    routeMessage(message, getCommand(message)).catch(console.error)
  }
})

const getCommand = (message: discord.Message) => {
  const messageString = message.content.replace(new RegExp(`<@!?${bot.user?.id}>`), "").trim()
  const messageArray = messageString.split(" ")
  
  const command = messageArray[0].toLowerCase()
  const commandArguments = messageArray.length > 1 ? messageArray.slice(1, messageArray.length): []

  return { command, commandArguments }
}