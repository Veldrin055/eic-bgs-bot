export const capitalize = (s: any) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const percentage = (num: number) => Math.round(num * 1000) / 10