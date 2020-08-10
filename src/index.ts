import * as discord from 'discord.js'
import * as config from './config.json'
import messageRouter from './router'


const bot = new discord.Client()
bot.login(config.token)

bot.on('message', async (message) => {
  if (message.mentions.users.some(({ id }) => id === bot.user?.id)) {
    messageRouter(message, getCommandArguments(message))  
  }
})

const getCommandArguments = (message: discord.Message) => {
  const messageString = message.content.replace(new RegExp(`<@!?${bot.user?.id}>`), "").trim()
  const messageArray = messageString.split(" ")
  const command = messageArray[0].toLowerCase()
  const commandArguments = messageArray.length > 1 ? messageArray.slice(1, messageArray.length).join(" ") : ''

  return { command, commandArguments }
}