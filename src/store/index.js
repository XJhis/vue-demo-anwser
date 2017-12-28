import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

//挂在Vuex到Vue下
Vue.use(Vuex);

const state = {
    topTitle: '答题啦',
    currentTopic: null,
    answer: [],
    topic: [
        {
            title: '《静夜思》是唐代哪一位大诗人的佳作？',
            topicId: 10,
            rank: 1,
            item: [
                {
                    cont: '李白',
                    id: 1,
                    topicId: 10
                },
                {
                    cont: '杜甫',
                    id: 2,
                    topicId: 10
                },
                {
                    cont: '苏轼',
                    id: 3,
                    topicId: 10
                },
                {
                    cont: '陶渊明',
                    id: 4,
                    topicId: 10
                },
            ]
        },
        {
            title: '今天天气怎么样？',
            topicId: 11,
            rank: 2,
            item: [
                {
                    cont: '多云转晴',
                    id: 1,
                    topicId: 11
                },
                {
                    cont: '多云转小雨',
                    id: 2,
                    topicId: 11
                },
                {
                    cont: '小雨转晴',
                    id: 3,
                    topicId: 11
                },
                {
                    cont: '天空灰蒙蒙的',
                    id: 4,
                    topicId: 11
                },
            ]
        },
        {
            title: '"他人笑我太疯癫"的下一句是什么？',
            topicId: 12,
            rank: 3,
            item: [
                {
                    cont: '我要喝娃哈哈',
                    id: 1,
                    topicId: 12
                },
                {
                    cont: '我自横刀向天笑',
                    id: 2,
                    topicId: 12
                },
                {
                    cont: '去留肝胆两昆仑',
                    id: 3,
                    topicId: 12
                },
                {
                    cont: '我笑他人看不穿',
                    id: 4,
                    topicId: 12
                },
            ]
        }
    ]
}

const getters = {
    money: state => {
        return state.num + '元'
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

