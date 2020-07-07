//types
const types = {
    USER_APP: 'USER_APP',
}
//state
const state = {
    userApp: JSON.parse(sessionStorage.getItem('appList') || '[]'),
}
//getters
const getters = {
    userApp: state => state.userApp,
}
//mutations
const mutations = {
    [types.USER_APP](state, data) {
        state.userApp = data,
            sessionStorage.setItem('appList', JSON.stringify(data))
    }
}
//actions
const actions = {
    setUserApp: ({
        commit
    }, data) => {
        commit(types.USER_APP, data)
    },
}
export default {
    state,
    getters,
    mutations,
    actions
}