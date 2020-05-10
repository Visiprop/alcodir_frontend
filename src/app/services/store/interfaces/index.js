import * as AuthInteface from './auth.interfaces'
import * as PageInterface from './page.interfaces'

export let states = {
    username: null,
    avatar: null,
    profile: null,
    onLoad: false,
    isPreloader: false, 
    ...AuthInteface.default,
    ...PageInterface.default
}