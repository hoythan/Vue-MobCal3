import VueMobCal from './vue-mobcal.vue'
import type { vueMobCalGlobal } from './typings'
import '@doofox/base-class.css'
import './scss/index.scss'

const install = function(Vue: any) {
  Vue.component('VueMobCal', VueMobCal)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.createApp({}).component('VueMobCal', VueMobCal);
}

export const globalMobCal: vueMobCalGlobal = {
  version: '1.0.0',
  install,
  VueMobCal,
}

export { VueMobCal }

export default globalMobCal
