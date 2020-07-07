//types
const types = {
    APP_MENU: 'APP_MENU',
}
//state
const state = {
    appMenu: [],
}
//getters
const getters = {
    appMenu: state => state.appMenu,
}
//mutations
const mutations = {
    [types.APP_MENU](state, data) {
        state.appMenu = data
    }
}
//actions
const actions = {
    setAppMsg: ({
        commit
    }, data) => {
        commit(types.APP_MENU, data)
    },
}
export default {
    state,
    getters,
    mutations,
    actions
}