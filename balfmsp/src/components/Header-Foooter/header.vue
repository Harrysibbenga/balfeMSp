<template>
  <div>
    <b-navbar toggleable type="dark" variant="dark" class="p-4">
      <b-navbar-brand to="/">
        <img
          class="img-fluid logo"
          src="../../assets/Balfe_logo.png"
          alt="Balfe Motorsport Logo"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse" class="border-0">
        <template v-slot:default="{ expanded }">
          <b-icon
            v-if="expanded"
            icon="chevron-bar-up"
            font-scale="2"
            variant="primary"
          ></b-icon>
          <b-icon
            v-else
            icon="chevron-bar-down"
            font-scale="2"
            variant="primary"
          ></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="mx-auto align-items-center">
          <!-- Links -->
          <b-nav-item
            to="/all-posts"
            class="py-1"
            @click="expanded = true ? expanded == false : expanded == true"
            >News</b-nav-item
          >
          <b-nav-item
            to="/historic-posts"
            class="py-1"
            @click="expanded = true ? expanded == false : expanded == true"
            >About</b-nav-item
          >
          <b-nav-item
            href="/#media-sec"
            class="py-1"
            @click="expanded = true ? expanded == false : expanded == true"
            >Media</b-nav-item
          >
          <b-nav-item
            href="/#drivers-sec"
            class="py-1"
            @click="expanded = true ? expanded == false : expanded == true"
            >Drivers</b-nav-item
          >
          <b-nav-item
            href="/#calender"
            class="py-1"
            @click="expanded = true ? expanded == false : expanded == true"
            >Upcoming</b-nav-item
          >
          <b-nav-item
            href="/#contact"
            class="py-1"
            @click="expanded = true ? expanded == false : expanded == true"
            >Contact</b-nav-item
          >
          <b-nav-item
            to="/dashboard"
            class="py-1"
            v-if="currentUser"
            @click="expanded = true ? expanded == false : expanded == true"
            >Dashboard</b-nav-item
          >
          <!-- Links -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: false
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters["admin/currentUser"];
    }
  }
};
</script>

<style lang="scss">
button:focus {
  outline: none !important;
}
a {
  font-size: 1.2rem;
}
</style>
