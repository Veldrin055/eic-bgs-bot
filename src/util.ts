import moment from 'moment'
import { FactionPresense } from './bgs-client/types'

export const capitalize = (s: any) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const capitalizeWords = (s: string) => s.split(' ').map(capitalize).join(' ')

export const percentage = (num: number) => Math.round(num * 1000) / 10

export const formatNumber = (num: number) => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

export const formatTick = (update: moment.MomentInput, tick: moment.MomentInput) => {
  const updateMoment = moment(update)
  const tickMoment = moment(tick)
  const suffix = updateMoment.isAfter(tickMoment) ? "after" : "before"
  
  return `${updateMoment.fromNow()}, ${updateMoment.from(tickMoment, true)} ${suffix} last detected tick`
}

export const formatTrend = (trend?: number) =>{
  if (trend === undefined) {
    return ''
  }
  if (trend > 0) {
      return ' ⬆️';
  } if (trend < 0) {
      return  ' ⬇️';
  }
  return ' ↔️';
}

export const decorations = (factionPresence?: FactionPresense) => {
  if (!factionPresence) return []

  const { active_states } = factionPresence

  return [
    active_states.some(({ state }) => state === 'war') ? '⚔️': '',
    active_states.some(({ state }) => state === 'civilwar') ? '⚔️': '',
    active_states.some(({ state }) => state === 'election') ? '🗳️': '',
    active_states.some(({ state }) => state === 'boom') ? '📈': '',
    active_states.some(({ state }) => state === 'bust') ? '📉': '',
    active_states.some(({ state }) => state === 'outbreak') ? '☣️': '',
    active_states.some(({ state }) => state === 'pirateattack') ? '🏴‍☠️': '',
    active_states.some(({ state }) => state === 'civilunrest') ? '✊': '',
    active_states.some(({ state }) => state === 'civilliberty') ? '🗽': '',
    active_states.some(({ state }) => state === 'expansion') ? '🚀': '',
    active_states.some(({ state }) => state === 'famine') ? '🍽️': '',
    active_states.some(({ state }) => state === 'investment') ? '💰': '',
    active_states.some(({ state }) => state === 'lockdown') ? '👮‍♀️': '',
    active_states.some(({ state }) => state === 'retreat') ? '🔙': '',
    active_states.some(({ state }) => state === 'blight') ? '💀': '',
    active_states.some(({ state }) => state === 'drought') ? '🏜️': '',
    active_states.some(({ state }) => state === 'infrastructurefailure') ? '🚧': '',
    active_states.some(({ state }) => state === 'naturaldisaster') ? '🌋': '',
    active_states.some(({ state }) => state === 'publicholiday') ? '🎆': '',
    active_states.some(({ state }) => state === 'terrorism') ? '💣': '',
  ]
}
