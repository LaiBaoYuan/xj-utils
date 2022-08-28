import * as time from './time'
import * as validate from './validate'

export * from './time'
export * from './validate'

const utils = {
    ...time,
    ...validate
}

export default {
    install(v:any){
        v.prototype.$utils = utils
    }
}