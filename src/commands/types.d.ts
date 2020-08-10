import { Message } from 'discord.js'

export type Command = {
  name: string
  exec: (message: Message, arguments: string[]) => Promise<void>
  help?: string
}