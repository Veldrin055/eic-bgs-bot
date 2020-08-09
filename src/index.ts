import * as discord from 'discord.js'
import * as config from './config.json'
import messageRounter from './router'


const bot = new discord.Client()
bot.login(config.token)

bot.on('message', messageRounter)