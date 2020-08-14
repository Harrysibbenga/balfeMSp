<template>
  <div id="app">
    <comp-header />
    <router-view />
    <comp-footer />
  </div>
</template>

<script>
import compHeader from "./components/Header-Foooter/header";
import compFooter from "./components/Header-Foooter/footer";
export default {
  components: {
    compHeader,
    compFooter,
  },
  created() {
    this.$store.dispatch("gallery/setGallery");
    this.$store.dispatch("partners/setPartners");
    this.$store.dispatch("drivers/setDrivers");
    this.$store.dispatch("posts/setPosts");
    this.$store.dispatch("history/setAllHistory");
    this.$store.dispatch("calender/setAllRounds");
    this.$store.dispatch("calender/setAllTracks");
    this.$store.dispatch("images/setImages");
    this.$store.dispatch("images/setDriverImages");
    this.$store.dispatch("images/setLogos");
    this.$store.dispatch("images/setTrackImages");
  },
};
</script>

<style lang="scss">
@media screen and (max-width: 575px) {
  .w-50 {
    width: 100% !important;
  }
}
</style>
