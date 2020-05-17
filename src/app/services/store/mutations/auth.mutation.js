export default {
    setToken(state, accessToken) {
        state.accessToken = accessToken;
    },
    setProfile(state, profile) {
        state.username = profile.first_name +' '+ profile.last_name
        state.avatar = profile.links[profile.links.findIndex(_item => _item.name == 'avatar')].url
    }
}