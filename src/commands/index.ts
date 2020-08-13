import { Command } from './types'
import factionStatus from './faction-status'
import systemStatus from './system-status'
import codex from './codex'
import help from './help'

export default [
 factionStatus,
 systemStatus,
 codex,
 help,
] as Command[]