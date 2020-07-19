//types
const types = {
    APP_CURRENT_MSG: 'APP_CURRENT_MSG',
    APP_PREV_MSG: 'APP_PREV_MSG',
}
//state
const state = {
    appCurrentMsg: '',
    appPrevMsg: '',
}
//getters
const getters = {
    appCurrentMsg: state => state.appCurrentMsg,
    appPrevMsg: state => state.appPrevMsg,
}
//mutations
const mutations = {
    [types.APP_CURRENT_MSG](state, data) {
        state.appCurrentMsg = data
    },
    [types.APP_PREV_MSG](state, data) {
        state.appPrevMsg = data
    }
}
//actions
const actions = {
    setAppCurrentMsg: ({
        commit
    }, data) => {
        commit(types.APP_CURRENT_MSG, data)
    },
    setAppPrevMsg: ({
        commit
    }, data) => {
        commit(types.APP_PREV_MSG, data)
    },
}
export default {
    state,
    getters,
    mutations,
    actions
}