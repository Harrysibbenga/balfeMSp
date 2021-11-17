<template>
  <b-carousel
    id="carousel-head"
    v-model="slide"
    :interval="10000"
    background="black"
    width="2560"
    height="1250"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
    fade
    no-hover-pause
  >
    <!-- Latest article -->
    <b-carousel-slide>
      <template v-slot:img>
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-8 order-xl-1 p-0">
              <img
                class="d-block img-fluid w-100"
                width="2560"
                height="1250"
                :alt="latestNews.alt"
                :src="latestNews.image"
              />
            </div>
            <div class="col-xl-4 order-xl-0 p-0">
              <div class="d-flex flex-column flex-center">
                <div class="bg-secondary p-4 pb-5 text-center">
                  <p class="date thin">{{ latestNews.date | formatDate }}</p>
                  <h1 class="display">{{ latestNews.title }}</h1>
                </div>
                <div
                  class="d-flex flex-column flex-center bg-primary p-4 text-center"
                >
                  <p class="excerpt">{{ latestNews.excerpt }}</p>
                  <div class="d-flex pt-3">
                    <app-button
                      type="link"
                      :linkTo="`/post/${latestNews.id}`"
                      :addClass="['btn-md', 'btn-secondary', 'mx-3', 'px-3']"
                      >View</app-button
                    >

                    <app-button
                      type="link"
                      linkTo="/all-posts"
                      :addClass="['btn-md', 'btn-secondary', 'mx-3', 'px-3']"
                      >View All</app-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </b-carousel-slide>

    <!-- History -->
    <b-carousel-slide>
      <template v-slot:img>
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-8 p-0">
              <img
                class="d-block img-fluid w-100"
                width="2560"
                height="1250"
                :alt="history.alt"
                :src="history.image"
              />
            </div>
            <div class="col-xl-4 p-0">
              <div class="d-flex flex-column flex-center w-100">
                <div class="bg-secondary p-4 pb-5 w-100 text-center">
                  <p class="date thin">{{ history.date | formatDate }}</p>
                  <h1 class="display">{{ history.title }}</h1>
                </div>
                <div
                  class="d-flex flex-column flex-center bg-primary p-4 text-center"
                >
                  <p class="excerpt">{{ history.excerpt }}</p>
                  <div class="d-flex pt-3">
                    <app-button
                      type="link"
                      :linkTo="`/history/${history.id}`"
                      :addClass="['btn-md', 'btn-secondary', 'mx-3', 'px-3']"
                      >View</app-button
                    >

                    <app-button
                      type="link"
                      linkTo="/historic-posts"
                      :addClass="['btn-md', 'btn-secondary', 'mx-3', 'px-3']"
                      >View All</app-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
import { historicCollection, postsCollection } from "../../firebaseConfig";
import moment from "moment";
export default {
  data() {
    return {
      slide: 0,
      sliding: false,
      latestNews: [],
      history: []
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
      if (this.slide == 1) {
        this.setPost();
      }
    },
    setHistoryPost() {
      historicCollection
        .orderBy("date", "desc")
        .limit(1)
        .get()
        .then(docs => {
          let postsArray = [];
          docs.forEach(doc => {
            let post = doc.data();
            post.id = doc.id;
            postsArray.push(post);
          });
          this.history = postsArray[0];
        });
    },
    setPost() {
      postsCollection
        .orderBy("date", "desc")
        .limit(3)
        .onSnapshot(docs => {
          let postsArray = [];
          docs.forEach(doc => {
            let post = doc.data();
            post.id = doc.id;
            postsArray.push(post);
          });
          let rand = Math.floor(Math.random() * postsArray.length);
          this.latestNews = postsArray[rand];
        });
    }
  },
  filters: {
    formatDate(val) {
      if (!val) {
        return "-";
      }
      let date = val.toDate();
      return moment(date).format("MMMM Do YYYY");
    }
  },
  created() {
    this.setPost();
    this.setHistoryPost();
  }
};
</script>

<style lang="scss">
@media screen and (max-width: 575px) {
  .display {
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1.2;
    font-family: univia-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
}

@media (min-width: 576px) {
  .display {
    font-size: 3rem;
    font-weight: 300;
    line-height: 1.2;
    font-family: univia-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
}

/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .display {
    font-size: 3.2rem;
    font-weight: 300;
    line-height: 1.2;
    font-family: univia-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .display {
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1.2;
    font-family: univia-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
}

@media (min-width: 1400px) {
  .display {
    font-size: 3.5rem;
    font-weight: 300;
    line-height: 1.2;
    font-family: univia-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
}

.display- p {
  font-size: 1.2rem;
}
</style>
