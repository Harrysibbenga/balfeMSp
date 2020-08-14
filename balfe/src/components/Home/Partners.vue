<template>
  <div id="partners-sec">
    <hooper
      :itemsToSlide="1"
      :wheelControl="false"
      :infiniteScroll="true"
      :autoPlay="true"
      class="hooper-padding"
      :settings="hooperSettings"
    >
      <slide v-for="(partner, index) in partners" :key="index">
        <img
          :src="partner.logoUrl"
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
        <img :src="activePartner.logoUrl" class="img-fluid" />
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

<style lang="scss" scoped>
:focus {
  outline: none !important;
}
img {
  cursor: pointer;
}

.hooper-indicators li button.hooper-indicator {
  background-color: black !important;
}

.hooper-indicators li button.hooper-indicator.is-active {
  background-color: white !important;
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
