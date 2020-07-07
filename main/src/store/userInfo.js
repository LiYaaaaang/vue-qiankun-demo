//types
const types = {
    USER_INFO: 'USER_INFO'
}
//state
const state = {
    userInfo: JSON.parse(sessionStorage.getItem('userInfo') || '[]')
}
//getters
const getters = {
    userInfo: state => state.userInfo
}
//mutations
const mutations = {
    [types.USER_INFO](state, userInfo) {
        state.userInfo = userInfo,
            sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
    }
}
//actions
const actions = {
    setUserInfo: ({
        commit
    }, userInfo) => {
        commit(types.USER_INFO, userInfo)
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}