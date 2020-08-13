import { readFileSync } from 'fs'

export type Config = {
  token: string
  defaultFaction: string
  defaultSystem: string
}

let config: Config = {
  token: '',
  defaultFaction: '',
  defaultSystem: '',  
}

export const loadConfig = () => {
  try {
    const data = readFileSync('config.json', 'utf8')
    const json = JSON.parse(data) as Config
    config = { ...json }
  } catch (err) {
    console.error('Problem loading config.json. Does it exit in the project root?', err)
    process.exit(1)
  }

}


export default () => config
