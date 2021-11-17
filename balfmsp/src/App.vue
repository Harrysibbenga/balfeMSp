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
  name: "App",
  metaInfo: {
    title: "Balfe Motorsport",
    titleTemplate: "%s | Official website",
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "A family-run affair, Balfe Motorsport has been in existence since 1998 as a partnership between father and son David and Shaun Balfe.",
      },
      {
        property: "og:title",
        content: "Balfe Motorsport - Official website",
      },
      {
        property: "og:description",
        content:
          "A family-run affair, Balfe Motorsport has been in existence since 1998 as a partnership between father and son David and Shaun Balfe.",
      },
      {
        property: "og:url",
        content: "https://balfe-motorsport.com/",
      },
      {
        property: "og:image",
        content:
          "https://firebasestorage.googleapis.com/v0/b/balfemsp.appspot.com/o/logos%2FBalfe_logo.jpg?alt=media&token=71bddcd4-016a-43ca-ab89-8a1c7e014f37",
      },
      { property: "og:site_name", content: "Balfe Motorsport" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index,follow" },
    ],
  },
  components: {
    compHeader,
    compFooter,
  },

   mounted() {
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
  }
};
</script>

<style lang="scss">
@media screen and (max-width: 575px) {
  .w-50 {
    width: 100% !important;
  }
}
</style>
