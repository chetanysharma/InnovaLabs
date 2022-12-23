<template>
  <div id="error">
    <div class="wrapper">
      <div class="container">
        <div class="grid-row">
          <div class="colmun colmun-left">
            <h1 class="px-spc-b-20">
              We can't find the page you are looking for.
            </h1>
            <span class="px-spc-b-20"
              >This page has been relocated or removed.</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Error",
});
</script>