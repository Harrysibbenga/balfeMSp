<template>
  <div>
    <h1 class="text-left">Posts</h1>
    <hr class="balfe-line" />
    <b-nav tabs>
      <b-nav-item to="/dashboard/posts">Add post</b-nav-item>
      <b-nav-item to="/dashboard/posts/list-posts">Manage posts</b-nav-item>
    </b-nav>
    <router-view></router-view>
  </div>
</template>

