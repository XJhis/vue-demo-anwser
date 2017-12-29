const mutations = {
    initData(state) { //初始化数据
        state.answer = [];
        state.currentTopic = state.topic[0];
    },
    chooseAnswer(state, params) {
        state.answer[params.key] = params.id
    }
}

export default mutations;