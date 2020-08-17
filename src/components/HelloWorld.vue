<template>
  <div class="hello">
    <van-card
      class="sale-card"
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      v-for="(item, idx) in 10"
      :key="idx"
    />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.sale-card {
  margin-top: 10px;
}
</style>
