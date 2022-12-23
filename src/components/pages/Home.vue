<template>
  <div class="home">
    <div class="jumbotron">
      <div class="container homeCard">
        <h1 class="display-3 card">Innova Labs</h1>
        <p>
          We will help you with your business with digital transformation using data analytics, AI ML and Automation
        </p>
      </div>
    </div>

    <hr />

    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h2>Web Application Development</h2>
          <p>
            Our Ruby on rails, python, PHP (Laraval) and vue/reactjs developers can be the perfect combination of your product 
          </p>
        </div>
        <div class="col-md-4">
          <h2>Mobile App Development</h2>
          <p>
           Our mobile app developers keep themselves updated to industry requirements so you get market fit app.
          </p>
        </div>
        <div class="col-md-4">
          <h2>IT Staff Management</h2>
          <p>
            Hire remote developers who are vetted through a rigorous interview process. Save hiring cost and time. 
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <h2>Internet of Things IoT</h2>
          <p>
            Boost productivity by introducing IoT to your business processes. your search for Internet of Things comapaines end here.
          </p>
        </div>
        <div class="col-md-4">
          <h2>DevOps</h2>
          <p>
           Automate the deployment process and reduce conflicts between team with CI/CD to reduce time to market.
          </p>
        </div>
        <div class="col-md-4">
          <h2>Proof of Concept PoC</h2>
          <p>
            Our solution Architect help your team validate idea , product, concept and design a road-map for your product.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
});
</script>
<style scoped>
.homeCard {
  text-align: center;
  height: 300px;
  background-color: lavender;
  margin-bottom: 10%;
}
.card {
  padding-top: 5%;
}
</style>
