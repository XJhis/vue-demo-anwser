<template>
  <div>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-exceed="handleExceed"
        :before-upload="beforeUpload"
        :before-remove="beforeRemove"
        multiple
        :limit="5"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb，你他妈是不是傻</div>
      </el-upload>
      <hr>
      <!-- 评分 -->
      <el-rate 
        :max="5"
        :min="2"
        :allow-half="true"
        show-text
        text-color="#fff"
        void-color="#0ff"
        v-model="star"></el-rate>

  </div>
</template>

<script>
import AnswerStep from "../../components/content/answerStep"

export default {
    name: 'home',
    components: {
        AnswerStep
    },
    data() {
      return {
        // fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        fileList: [],
        star: 2

      };
    },
    methods: {
      handleRemove(file, fileList) { //删除文件之后触发
        console.log('rrrrrrrrr',file, fileList);
      },
      handlePreview(file) { //点击上传的文件时触发
        console.log('ppppp', file);
      },
      handleExceed(files, fileList) {  //超出限制时触发？
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeUpload(file) {
        console.log(file)
        let type = file.type,
            size = file.size;


        if ( type.indexOf('image')>-1 ) {
            return true;

        }else {
            console.log('请上传图片')
            return false
        }

      },
      beforeRemove(file, fileList) { //删除文件之前触发
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    },
    created() {

    }
}

</script>

<style>

</style>
