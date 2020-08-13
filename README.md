# eic-bgs-bot
A BGS information Discord bot for the EIC

## Installing
Just `git clone` this repo.

```bash
npm i
npm run build
# Config as outlined below
npm start
```

## Config

Create a file `config.json` in the project root. It should have the following in it:

```json
{
  "token": "Your Discord API bot token",
  "defaultFaction": "This faction will be queried if no arguments are provided to the 'faction' command, eg 'East India Company'",
  "defaultSystem": "This system will be queried if no arguments are provided to the 'system' command, eg 'LTT 1349'"
}
```

## Creating a Discord bot
Follow the instructions on [https://discord.com/developers/applications] to create a bot. You'll use its token to in the config file to connect the app to your bot.

## How do I use the bot?
Add it to a channel. You can see its commands via `@BGS Bot help`
