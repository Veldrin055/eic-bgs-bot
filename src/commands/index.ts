import { Command } from './types'
import factionStatus from './faction-status'
import systemStatus from './system-status'
import help from './help'

export default [
 factionStatus,
 systemStatus,
 help,
] as Command[]