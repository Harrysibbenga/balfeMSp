<template>
  <div class="container-fluid">
    <b-nav tabs>
      <b-nav-item to="/dashboard/posts">Posts</b-nav-item>
      <b-nav-item to="/dashboard/partners">Partners</b-nav-item>
      <b-nav-item to="/dashboard/drivers">Drivers</b-nav-item>
      <b-nav-item to="/dashboard/calender">Calendar</b-nav-item>
      <b-nav-item to="/dashboard/history">History</b-nav-item>
      <b-nav-item to="/dashboard/media">Media</b-nav-item>
      <b-nav-item @click="logout()">Logout</b-nav-item>
    </b-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { auth } from "../../firebaseConfig";
export default {
  methods: {
    logout() {
      auth.signOut().then(() => {
        this.$router.push("/");
        this.$store.dispatch("admin/clearData");
      });
    }
  }
};
</script>