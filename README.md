# eic-bgs-bot
A BGS information Discord bot for the EIC

## Installing
1. `git clone https://github.com/Veldrin055/eic-bgs-bot`
1. `cd eic-bgs-bot`
1. `npm i`
1. Create `config.json` as outlined below
1. `npm start`

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
Follow the instructions on https://discord.com/developers/applications to create a bot. You'll use its token to in the config file to connect the app to your bot.

## How do I use the bot?
Add it to a channel. You can see its commands via `@BGS Bot help`

## Acknowledgements
The Bot is made possible thanks to the efforts of CMDR Garud and his project https://github.com/SayakMukhopadhyay/elitebgs (https://elitebgs.app/). Please give him lots of support. It's also inspired by his own bot, which didn't quite fit my needs so I made a simplified, stripped down version.

## Legal Notice
This software is not an official tool for the game Elite: Dangerous and is not affiliated with Frontier Developments. All information provided is based on publicly available information and may not be entirely accurate.

Elite © 1984 David Braben & Ian Bell. Frontier © 1993 David Braben, Frontier: First Encounters © 1995 David Braben and Elite: Dangerous © 2012, 2013 Frontier Developments plc. All rights reserved. 'Elite', the Elite logo, the Elite: Dangerous logo, 'Frontier' and the Frontier logo are registered trademarks of Frontier Developments plc. All rights reserved. All other trademarks and copyright are acknowledged as the property of their respective owners.
