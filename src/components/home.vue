<template>
  <div>
    <h1>我是首页</h1>
    <div>
      {{ userInfo }}
    </div>
  </div>
</template>
<script>
import { mapState, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState(['userInfo'])
  },
  mounted(){
    console.log(this)
  }
}
</script>
<style>

</style>   