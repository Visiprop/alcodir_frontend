import * as AuthMutation from './auth.mutation'

export let mutations = {
    setIsPreloader: (state, status) => {
        state.isPreloader = status
    },
    setOn_Load: (state, status) => {
        state.onLoad = status
    },
    ...AuthMutation.default
}