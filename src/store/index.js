import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

//挂在Vuex到Vue下
Vue.use(Vuex);

const state ={
   topTitle: '答题啦',
   num: 10,
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

