const ENV = process.env.BASE_API

export default {
    auth: {
        token: `${ENV}/auth/token`, //METHOD = POST
        out: `${ENV}/auth/out`
    }
}