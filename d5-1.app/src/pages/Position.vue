<template lang="html">
  <div class="m-position">
    <div class="login" ref="abc">
      <span>十秒钟定制职位</span>
      <span>
        <a>去登录</a>
      </span>
    </div>
    <position-list />
  </div>
</template>

<script>
import PositionList from '../components/PositionList.vue'
export default {
  components: {
    PositionList
  },
  mounted() {
    this.$store.commit('changeIndex', 0)
  }
}
</script>
