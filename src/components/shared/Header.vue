<template>
  <nav
    class="navbar sticky-top navbar-expand-lg"
    style="background-color: #e3f2fd"
  >
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link class="nav-link" to="/users">Users</router-link>
          <router-link class="nav-link" to="/contactus">ContactUs</router-link>
        </div>
      </div>
      <!-- <h1>{{getUser}}</h1> -->
    </div>
  </nav>
</template>

<script>

import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Header'
});
</script>

<style scoped>
.displayName {
  position: absolute;
  right: 20px;
  top: 15px;
}
</style>