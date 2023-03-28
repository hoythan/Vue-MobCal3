import VueMobCal from '../vue-mobcal.vue'
import { globalMobCal } from '../index'

export interface vueMobCalGlobal {
  version: string,
  install: (app: any, ...options: any[]) => any,
  VueMobCal: typeof VueMobCal
}

declare global {
  interface Window { 
    Vue: any
  }
}

export {
  VueMobCal
}

export default globalMobCal