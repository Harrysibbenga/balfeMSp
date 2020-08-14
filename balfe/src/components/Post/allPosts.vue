<template>
  <div>
    <div
      class="container-fluid bg p-0"
      :style="{ backgroundImage: `url(${backgroundUrl})` }"
    >
      <div class="bg-primary d-flex flex-centre p-3 pl-5 w-50 mb-5 text-light">
        <h2 class="ml-5">Latest News</h2>
      </div>
      <div class="row pb-5 m-0 d-flex flex-center">
        <div
          class="news-col bg-white my-4 p-4 mx-md-2 col-12 col-md-6 col-lg-4"
          v-for="(post, index) in paginatedData"
          :key="index"
        >
          <img class="img-fluid" :src="post.image" />
          <div class="text-container">
            <h5 class="py-2 text-center">{{ post.title }}</h5>
            <p class="excerpt mt-3">{{ post.excerpt | trimLength }}</p>
            <p class="thin my-4 text-center">{{ post.date | formatDate }}</p>
            <div class="container-fluid p-0 text-center">
              <div class="row m-0">
                <div class="col-12">
                  <app-button
                    type="link"
                    :linkTo="`/post/${post.id}`"
                    :addClass="['btn-md']"
                    >View</app-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import backgroundUrl from "@/assets/img/backgrounds/list.jpg";
export default {
  data() {
    return {
      pageNumber: 0,
      backgroundUrl,
    };
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 8,
    },
  },
  computed: {
    postsContent() {
      return this.$store.getters["posts/getPosts"];
    },
    pageCount() {
      let l = this.postsContent.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.postsContent.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
  },
  filters: {
    formatDate(val) {
      if (!val) {
        return "-";
      }
      let date = val.toDate();
      return moment(date).format("MMMM Do YYYY");
    },
    trimLength(val) {
      if (val.length < 200) {
        return val;
      }
      return `${val.substring(0, 200)}...`;
    },
  },
};
</script>

<style lang="scss" scoped>
.bg {
  background-size: cover;
  width: 100%;
  min-height: min-content;
}

.news-col {
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
}
@media (min-width: 992px) {
  .col-lg-4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 30%;
    flex: 0 0 30%;
    max-width: 30%;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .col-md-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 45%;
    flex: 0 0 45%;
    max-width: 45%;
  }
}
</style>
