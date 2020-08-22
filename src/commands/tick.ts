import { Command } from './types'
import { tick } from '../bgs-client'
import moment from 'moment'
import { Message } from 'discord.js'

export default {
  name: 'tick',
  help: 'Last tick time',
  exec: async ({ channel }: Message) => {

    const { updated_at } = await tick()
    const tickMoment = moment(updated_at)
    
    await channel.send(`Last tick was ${tickMoment.fromNow(false)}, at \`${tickMoment.toString()}\``)
  },

} as Command