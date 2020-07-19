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
    [types.APP_CURRENT_MSG](state, currentMsg) {
        state.appCurrentMsg = currentMsg
    },
    [types.APP_PREV_MSG](state, prevMsg) {
        state.appPrevMsg = prevMsg
    }
}
//actions
const actions = {
    setAppCurrentMsg: ({
        commit
    }, currentMsg) => {
        commit(types.APP_CURRENT_MSG, currentMsg)
    },
    setAppPrevMsg: ({
        commit
    }, prevMsg) => {
        commit(types.APP_PREV_MSG, prevMsg)
    },
}
export default {
    state,
    getters,
    mutations,
    actions
}