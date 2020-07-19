//types
const types = {
    APP_ROUTER: 'APP_ROUTER'
}
//state
const state = {
    appRouter: ''
}
//getters
const getters = {
    appRouter: state => state.appRouter
}
//mutations
const mutations = {
    [types.APP_ROUTER](state, routerData) {
        state.appRouter = routerData
    }
}
//actions
const actions = {
    setAppRouter: ({
        commit
    }, routerData) => {
        commit(types.APP_ROUTER, routerData)
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}