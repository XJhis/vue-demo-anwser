const mutations = {
    initData(state) { //初始化数据
        state.answer = [];
        state.currentTopic = state.topic[0];
    }
}

export default mutations;