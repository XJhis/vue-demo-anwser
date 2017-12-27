<template>
    <div class="answer">
        <div class="answer-tips">
            <span v-if="type === 'start'">答题啦</span>
            <span v-if="type === 'step'">第题</span>
        </div>
        <div class="answer-cont">
            <div class="home-img" v-if="type === 'start'">
                <img src="../../imgs/feiji.png" alt="">
            </div>
            <div class="mod-topic" v-if="type === 'step'">
                <header>
                    <div class="left">题目1：</div>
                    <div class="right">你知道十万个为什么吗？你知道十万个为什么吗？你知道十万个为什么吗？</div>
                </header>
                <ul>
                    <li>
                        <i class="icon-item">A</i>初闻不识曲中意
                    </li>
                    <li class="active">
                        <i class="icon-item">A</i>初闻不识曲中意
                    </li>                    
                </ul>
            </div>            
        </div>
        <div class="answer-btn">
          <router-link class="start" :to="{name:'item'}" v-if="type === 'start'" tag="button"></router-link>
          <router-link class="next" to="/" v-if="type === 'step'" tag="button"></router-link>
          <router-link class="commit" to="/" v-if="type === 'step'" tag="button"></router-link>
          <!-- <a href="javascript:void(0)" @click="toStep">编程式导航</a> -->            
        </div>
    </div>
</template>

<script>
export default {
  name: "AnswerStep",
  props: ["answerType"],
  data() {
    return {
      type: this.answerType || "start"
    };
  },
  methods: {
    toStep() {
      this.$router.push("step"); //直接写字符串，对应的是path
      this.$router.push({ path: "step" });
      //   this.$router.push({name: 'item', params: { id: 123 }}) //带简单参数
      //   this.$router.push({ path: 'step', query: { plan: 'private' }}) //带查询参数
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.answer {
  width: 100%;
  height: 100%;
  /* background: url("../../imgs/baner.jpg") no-repeat center; */
  background-size: 100% 100%;
}
.answer-tips {
  position: absolute;
  right: 1rem;
  width: 5rem;
  height: 9rem;
  background: url("../../imgs/WechatIMG2.png") no-repeat top center;
  background-size: 100% 100%;
}

.answer-tips span {
  width: 100%;
  display: inline-block;
  position: relative;
  top: 6.5rem;
  font-size: 0.8rem;
  text-align: center;
  color: #a57c50;
}

.answer-cont {
  padding-top: 7rem;
  margin-bottom: 2rem;
}

.answer-cont .home-img img {
  display: block;
  width: 15rem;
  height: 11.6rem;
  margin: 0 auto;
}

.answer-cont .mod-topic {
  padding-top: 2.5rem;
}

.answer-btn button {
  display: block;
  margin: 0 auto;
  width: 5rem;
  height: 2.5rem;
  background-size: 100% 100%;
  background-position: center;
  background-color: transparent;
  border: none;
}

button.start {
  background-image: url("../../imgs/btnStart.png");
}

button.next {
  background-image: url("../../imgs/btnNext.png");
}

button.commit {
  background-image: url("../../imgs/btnCommit.png");
}

.mod-topic header {
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  width: 15rem;
  color: #fff;
}

.mod-topic header .left {
  float: left;
}

.mod-topic header .right {
  float: left;
  max-width: 11rem;
}

.mod-topic ul {
  margin: 0 auto;
  width: 10rem;
  font-size: 0.7rem;
  color: #fff;
}

.mod-topic ul li {
  margin-bottom: 0.3rem;
}

.icon-item {
  display: inline-block;
  font-style: normal;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  border: 1px solid #e8e8e8;
  font-size: 0.7rem;
  line-height: 0.75rem;
  text-align: center;
  color: #e8e8e8;
  margin-right: 0.25rem;
}

li.active .icon-item {
  background-color: #ffd400;
  color: #575757;
  border-color: #ffd400;
}
</style>
