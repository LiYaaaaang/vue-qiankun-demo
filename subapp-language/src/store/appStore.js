//types
const types = {
    APP_MSG: 'APP_MSG',
}
//state
const state = {
    appMsg: '',
}
//getters
const getters = {
    appMsg: state => state.appMsg,
}
//mutations
const mutations = {
    [types.APP_MSG](state, data) {
        state.appMsg = data
    }
}
//actions
const actions = {
    setAppMsg: ({
        commit
    }, data) => {
        commit(types.APP_MSG, data)
    },
}
export default {
    state,
    getters,
    mutations,
    actions
}