<template>
  <div>
    <h1 class="text-left">Partners</h1>
    <hr class="balfe-line" />
    <b-nav tabs>
      <b-nav-item to="/dashboard/partners">Add partner</b-nav-item>
      <b-nav-item to="/dashboard/partners/list-partners"
        >Manage partners</b-nav-item
      >
    </b-nav>
    <router-view></router-view>
  </div>
</template>
