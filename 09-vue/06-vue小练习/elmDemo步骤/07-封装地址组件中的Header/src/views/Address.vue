<template>
  <div class="address">
    <Header :isLeft="true" title="选择收货地址"></Header>
  </div>
</template>

<script>
import Header from "../components/Header"
export default {
  name: 'Address',
  components:{
      Header
  }
}
</script>
