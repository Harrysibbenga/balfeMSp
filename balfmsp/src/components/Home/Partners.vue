<template>
  <div id="partners-sec">
    <div class="bg-primary d-flex flex-centre p-3 pl-md-5 pb-0 w-50 mb-5">
      <h2 class="ml-md-5 mx-auto text-white">Partners</h2>
    </div>
    <hooper
      :itemsToSlide="1"
      :wheelControl="false"
      :infiniteScroll="true"
      :autoPlay="true"
      class="hooper-padding mt-5"
      :settings="hooperSettings"
    >
      <slide v-for="(partner, index) in partners" :key="index">
        <img
          :src="partner.logoUrl"
          :alt="partner.alt"
          class="img-fluid"
          width="150px"
          @click="clickedPartner(partner)"
        />
      </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
    <div class="container" v-if="activePartner">
      <div class="d-flex flex-column flex-md-row flex-center">
        <img
          :src="activePartner.logoUrl"
          :alt="activePartner.alt"
          class="img-fluid"
        />
        <div class="px-md-5" v-html="activePartner.desc"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination,
} from "hooper";
import "hooper/dist/hooper.css";

export default {
  data() {
    return {
      activePartner: false,
      partnerId: null,
      partnerView: {},
      hooperSettings: {
        itemsToShow: 2,
        breakpoints: {
          800: {
            itemsToShow: 3,
          },
          1000: {
            itemsToShow: 4,
          },
          1400: {
            itemsToShow: 5,
          },
        },
      },
    };
  },
  computed: {
    partners() {
      return this.$store.getters["partners/getPartners"];
    },
  },
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
  },
  methods: {
    clickedPartner(partner) {
      this.activePartner = partner;
    },
  },
};
</script>

<style lang="scss">
:focus {
  outline: none !important;
}
img {
  cursor: pointer;
}

button.hooper-indicator {
  background-color: black !important;
}

button.hooper-indicator.is-active {
  background-color: red !important;
}
@media screen and (max-width: 575px) {
  .hooper-padding {
    padding: 2rem;
  }
  img {
    width: 100px !important;
  }
}
.hooper-padding {
  padding-left: 6rem;
}
</style>
