<template>
  <div id="drivers-sec">
    <div class="container-fluid p-0">
      <div class="row no-gutters">
        <div class="col-lg-12">
          <div class="row no-gutters" v-if="drivers.length > 0">
            <div
              class="driver-cont-container col-4 col-lg-2 view"
              v-for="(driver, index) in drivers"
              :key="index"
              @click="clickedDriver(driver)"
            >
              <img class="img-fluid" :src="driver.image" />
              <div class="text-container text-center mask overflow-hidden">
                <div class="d-flex h-100">
                  <h3 class="title text-primary mt-auto">{{ driver.firstName }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="driver-sec" class="col-md-12" v-if="currentDriver != null">
          <div class="row m-0">
            <div class="col-md-6 view p-0">
              <img class="img-fluid" :src="currentDriver.image" />
              <div class="bg-dark">
                <h3 class="text-center text-white m-0 py-2">{{ currentDriver.fullName }}</h3>
              </div>
            </div>
            <div class="col-md-6">
              <div class="text-center"></div>
              <div class="container-fluid">
                <div class="px-5" v-html="currentDriver.career"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDriver: null
    };
  },
  computed: {
    drivers() {
      return this.$store.getters["drivers/getDrivers"];
    }
  },
  methods: {
    clickedDriver(driver) {
      this.currentDriver = driver;
    },
    defaultDriver() {
      this.currentDriver = this.drivers[0];
    }
  },
  created() {
    setTimeout(() => {
      this.defaultDriver();
    }, 1000);
  }
};
</script>
