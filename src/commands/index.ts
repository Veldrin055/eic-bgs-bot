import { Command } from './types'
import factionStatus from './faction-status'
import systemStatus from './system-status'
import codex from './codex'
import tick from './tick'
import help from './help'

export default [
 factionStatus,
 systemStatus,
 codex,
 tick,
 help,
] as Command[]