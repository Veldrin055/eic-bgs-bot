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
  "token": "secret pls don't hack me", // Your Discord API bot token
  "defaultFaction": "East India Company", // This faction will be queried if no arguments are provided to the 'faction' command.
  "defaultSystem": "LTT 1349" // This system will be queried if no arguments are provided to the 'system' command.
}
```

## Creating a Discord bot
Follow the instructions on [https://discord.com/developers/applications] to create a bot. You'll use its token to in the config file to connect the app to your bot.
