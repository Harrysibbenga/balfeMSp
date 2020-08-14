<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-8 order-xl-1 p-0">
          <img
            class="d-block img-fluid w-100"
            width="2560"
            height="1250"
            alt
            :src="post.image"
          />
        </div>
        <div class="col-xl-4 order-xl-0 p-0 text-white">
          <div class="d-flex flex-column flex-center">
            <div class="bg-secondary p-4 pb-5 text-center">
              <p class="date thin">{{ post.date | formatDate }}</p>
              <h1 class="display">{{ post.title }}</h1>
            </div>
            <div
              class="d-flex flex-column flex-center bg-primary p-4 text-center"
            >
              <p class="excerpt">{{ post.excerpt }}</p>
              <div class="d-flex pt-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row py-5">
        <div class="col-12 p-0" v-html="post.main"></div>
      </div>
      <div class="row">
        <div
          class="col-sm-6 col-md-4 col-lg-3 p-0"
          v-for="(image, index) in post.gallery"
          :key="index"
        >
          <img :src="image.url" class="img-fluid" />
        </div>
      </div>
      <div class="row py-5">
        <div class="col-12 p-0" v-html="post.comments"></div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  computed: {
    post() {
      return this.$store.getters["posts/getPost"];
    },
  },
  created() {
    let id = this.$route.params.id;
    this.$store.dispatch("posts/setPost", id);
  },
  destroyed() {
    this.$store.commit("posts/clearPost");
  },
  filters: {
    formatDate(val) {
      if (!val) {
        return "-";
      }
      let date = val.toDate();
      return moment(date).format("MMMM Do YYYY");
    },
  },
};
</script>
