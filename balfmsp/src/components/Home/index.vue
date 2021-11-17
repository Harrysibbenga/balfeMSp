<template>
  <div class="bg-dark text-white" id="home">
    <comp-carousel class="border-bottom border-primary" />
    <comp-latest-news
      id="news-sec"
      class="py-5 border-top border-bottom border-primary bg-white text-dark"
    />
    <comp-media id="media-sec" />
    <comp-drivers
      id="drivers-sec"
      class="border-top border-bottom border-primary text-dark bg-white"
    />
    <comp-upcoming-events id="calender" class="py-5 border-top border-bottom border-primary" />
    <comp-partners
      id="partners-sec"
      class="py-5 border-top border-bottom border-primary text-dark bg-white"
    />
    <comp-social id="social" class="border-top border-bottom border-primary text-light bg-dark"></comp-social>
    <comp-mailing-list
      id="mailing-list"
      class="border-top border-bottom border-primary text-dark bg-light"
    ></comp-mailing-list>
    <comp-contact id="contact"></comp-contact>
  </div>
</template>

<script>
import compCarousel from "./Carousel";
import compLatestNews from "./Latestnews";
import compMedia from "./Media";
import compDrivers from "./Drivers";
import compUpcomingEvents from "./Upcomingevents";
import compPartners from "./Partners";
import compContact from "./Contact";
import compSocial from "./Social";
import compMailingList from "./MailingList";

export default {
  components: {
    compCarousel,
    compLatestNews,
    compMedia,
    compPartners,
    compUpcomingEvents,
    compDrivers,
    compContact,
    compSocial,
    compMailingList
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
