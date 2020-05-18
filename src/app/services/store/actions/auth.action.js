import Account from '../../api/Account'

export default {
    doSign_In({ commit, state }, form) {
        console.log('vuex in action')
        state.onLoad = true
        state.isPreloader = true
        let responseData
        return new Promise((resolve, reject) => {
            Account.signIn(form)
            .then(_resp => {
                responseData = _resp.data
                if(_resp.data.success) {
                    let profile =  _resp.data.attributes.profile
                    state.username = profile.first_name +" "+profile.last_name
                    state.avatar = profile.links[profile.links.findIndex(_item => _item.name == 'avatar')].url
                    // localStorage.setItem('__CSRF', JSON.stringify())
                    sessionStorage.setItem('__SIGN_IN', JSON.stringify(profile))
                    sessionStorage.setItem('__CSRF', JSON.stringify(_resp.data.content))
                    state.accessToken = _resp.data.content.access_token
                    // await localStorage.setItem('__pr', JSON.stringify(_resp.data.attributes.profile))
                    window.location.href = "/"
                } else {
                    try {
                        throw _resp.data
                    } catch (error) {
                        // console.log(error)
                        this.error_msg = error.message
                    }
                    
                }
            })
            .finally(() => {
                if(state.accessToken) {
                    resolve(responseData)
                } else {
                    reject(responseData)
                }
            })
        })
    },
    // doSign_In({ commit, state }, form) {
    //     state.onLoad = true
    //     state.isPreloader = true
    //     let responseData
    //     return new Promise((resolve, reject) => {
    //         Account.signIn(form)
    //         .then(_resp => {
    //             responseData = _resp.data
    //             if(_resp.data.success) {
    //                 let profile =  _resp.data.attributes.profile
    //                 state.username = profile.first_name +" "+profile.last_name
    //                 state.avatar = profile.links[profile.links.findIndex(_item => _item.name == 'avatar')].url
    //                 // localStorage.setItem('__CSRF', JSON.stringify())
    //                 sessionStorage.setItem('__CSRF', JSON.stringify(_resp.data.content))
    //                 state.accessToken = _resp.data.content.access_token
    //                 // await localStorage.setItem('__pr', JSON.stringify(_resp.data.attributes.profile))
    //                 // window.location.href = "/"
    //             } else {
    //                 try {
    //                     throw _resp.data
    //                 } catch (error) {
    //                     // console.log(error)
    //                     this.error_msg = error.message
    //                 }
                    
    //             }
    //         })
    //         .finally(() => {
    //             if(state.accessToken) {
    //                 resolve(responseData)
    //             } else {
    //                 reject(responseData)
    //             }
    //         })
    //     })
    // }
}