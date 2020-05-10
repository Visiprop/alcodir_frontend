import * as AuthMutation from './auth.mutation'

export let mutations = {
    setIsPreloader: (state, status) => {
        state.isPreloader = status
    },
    ...AuthMutation.default
}