import axios from 'axios'
import RouteApi from './EndPoints'


class Account {
    static signIn(form) {
        return axios.post(RouteApi.auth.token, form)
    } 
    static logOut() {
        return axios.delete(RouteApi.auth.out)
    }
}

export default Account