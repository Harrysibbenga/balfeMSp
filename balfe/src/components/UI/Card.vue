<template>
  <div>
    <div :style="getStyle">
      <div v-if="item.imageId">
        <img :src="item.url" class="img-fluid" />
      </div>
      <div v-if="item.videoId">
        <b-embed type="iframe" aspect="16by9" :src="item.url" allowfullscreen></b-embed>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item", "index"],
  computed: {
    getStyle() {
      return {
        "--i": this.index
      };
    }
  }
};
</script>