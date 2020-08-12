import moment from 'moment'

export const capitalize = (s: any) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const percentage = (num: number) => Math.round(num * 1000) / 10

export const formatTick = (update: moment.MomentInput, tick: moment.MomentInput) => {
  const updateMoment = moment(update)
  const tickMoment = moment(tick)
  const suffix = updateMoment.isAfter(tickMoment) ? "after" : "before"
  
  return `${updateMoment.fromNow()}, ${updateMoment.from(tickMoment, true)} ${suffix} last detected tick`
}
