import { DiscordAPIError } from "discord.js";
import { Message } from 'discord.js'

export type Command = {
  name: string
  exec: (message: Message) => void
}