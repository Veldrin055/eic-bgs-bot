import moment from 'moment'
import { FactionPresense } from './bgs-client/types'

export const capitalize = (s: any) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

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

export const decorations = (factionPresence?: FactionPresense) => [
  factionPresence?.active_states?.some(({ state }) => state === 'war') ? '⚔️': '',
  factionPresence?.active_states?.some(({ state }) => state === 'civilwar') ? '⚔️': '',
  factionPresence?.active_states?.some(({ state }) => state === 'election') ? '🗳️': '',
  factionPresence?.active_states?.some(({ state }) => state === 'boom') ? '📈': '',
  factionPresence?.active_states?.some(({ state }) => state === 'bust') ? '📉': '',
  factionPresence?.active_states?.some(({ state }) => state === 'outbreak') ? '☣️': '',
  factionPresence?.active_states?.some(({ state }) => state === 'pirateattack') ? '🏴‍☠️': '',
]
