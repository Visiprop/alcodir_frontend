import * as AuthAction from './auth.action'
import * as PageAction from './page.action'
export let actions = { 
    ...AuthAction.default,
    ...PageAction.default
}