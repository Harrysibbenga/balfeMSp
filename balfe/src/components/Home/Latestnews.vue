<template>
  <div :style="{ backgroundImage: `url(${backgroundUrl})` }" class="bg">
    <div class="bg-primary d-flex flex-centre p-3 pl-md-5 w-50 mb-5 text-light">
      <h2 class="ml-md-5 mx-auto">Latest News</h2>
    </div>
    <div class="container-lg py-5 my-5">
      <div class="row m-0 d-flex flex-center">
        <div
          class="news-col col-md-4 my-4 p-4 mx-md-2 col-12 bg-white p-4 mt-2"
          v-for="(post, index) in latestPosts"
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
                  <app-button type="link" :linkTo="`/post/${post.id}`" :addClass="['btn-md']">View</app-button>
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
import backgroundUrl from "@/assets/img/backgrounds/latest.jpg";
import { postsCollection } from "../../firebaseConfig";

export default {
  data() {
    return {
      latestPosts: [],
      backgroundUrl
    };
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
    }
  },
  created() {
    postsCollection
      .orderBy("date", "desc")
      .limit(3)
      .onSnapshot(querySnapshot => {
        let postsArray = [];

        querySnapshot.forEach(doc => {
          let post = doc.data();
          post.id = doc.id;
          postsArray.push(post);
        });
        this.latestPosts = postsArray;
      });
  }
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

@media (min-width: 768px) {
  .col-md-4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 30%;
    flex: 0 0 30%;
    max-width: 30%;
  }
}
</style>
