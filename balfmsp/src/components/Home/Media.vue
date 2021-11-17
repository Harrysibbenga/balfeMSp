<template>
  <div class="position-relative">
    <div class="bg-primary d-flex flex-centre p-3 pl-md-5 pb-0 w-50 mt-5">
      <h2 class="ml-md-5 mx-auto">Media Gallery</h2>
    </div>

    <div class="container-fluid border-top border-bottom border-primary">
      <transition-group name="fade" tag="div" class="row">
        <Card
          class="col-12 col-sm-6 col-md-4 col-lg-3 p-0"
          v-for="(content, index) in paginatedData"
          :key="'card'+index"
          :index="index"
          :item="content"
        />
      </transition-group>
    </div>

    <nav aria-label="Media results">
      <ul class="pagination justify-content-center py-5 mt-2">
        <li class="page-item mx-1">
          <b-button variant="light" :disabled="pageNumber == 0" @click="firstPage">
            <b-icon icon="chevron-double-left" aria-hidden="true"></b-icon>
          </b-button>
        </li>
        <li class="page-item mx-1">
          <b-button variant="light" :disabled="pageNumber == 0" @click="prevPage">
            <b-icon icon="chevron-left" aria-hidden="true"></b-icon>
          </b-button>
        </li>
        <li class="page-item" v-for="(page,index) in pageCount" :key="index">
          <a
            class="btn mx-1 text-white"
            :class="{ 'btn-primary' : active == index }"
            @click="changePage(index)"
          >{{ page }}</a>
        </li>
        <li class="page-item mx-1">
          <b-button variant="light" :disabled="pageNumber >= pageCount -1" @click="nextPage">
            <b-icon icon="chevron-right" aria-hidden="true"></b-icon>
          </b-button>
        </li>
        <li class="page-item mx-1">
          <b-button variant="light" :disabled="pageNumber >= pageCount -1" @click="lastPage">
            <b-icon icon="chevron-double-right" aria-hidden="true"></b-icon>
          </b-button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Card from "../UI/Card";
export default {
  data() {
    return {
      pageNumber: 0,
      active: 0
    };
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 12
    }
  },
  components: {
    Card
  },
  computed: {
    galleryContent() {
      return this.$store.getters["gallery/getGallery"];
    },
    pageCount() {
      let l = this.galleryContent.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.galleryContent.slice(start, end);
    }
  },
  methods: {
    nextPage() {
      this.pageNumber++;
      this.active = this.pageNumber;
    },
    prevPage() {
      this.pageNumber--;
      this.active = this.pageNumber;
    },
    changePage(index) {
      this.pageNumber = index;
      this.active = index;
    },
    lastPage() {
      this.pageNumber = this.pageCount - 1;
      this.active = this.pageNumber;
    },
    firstPage() {
      this.pageNumber = 0;
      this.active = 0;
    }
  }
};
</script>

<style lang="css" scoped>
.media {
  z-index: 100;
  top: -5%;
}
.active {
  background-color: red;
}

.fade-enter {
  opacity: 0;
  transform: scale(0.5);
}

.fade-enter-active {
  transition: all 0.5s ease;
  transition-delay: calc(0.1 * var(--i));
}
</style>
