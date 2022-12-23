<template>
  <div id="contact">
      <div id="container">
          <div class="row centerHeading">
              <h5>Guests list is not store anywhere</h5>
              <h6>Here we understand the use of eventbus to implement child to child communication</h6>
          </div>
          <div class="row">
              <div class="col">
                  <Form :blocks="blocks" />
              </div>
              <div class="col">
                  <DisplayBlock/>
              </div>
          </div>

      </div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import Form from "../shared/Form.vue";
import DisplayBlock from '../shared/DisplayBlock.vue'

export default defineComponent({
  name: "ContactUs",
  components: {
    Form,
    DisplayBlock
  },
  setup() {
    const store = useStore();
    const blocks = computed(() => {
      return store.getters.getBlocks;
    });

    return { blocks }
  },
});
</script>

<style scoped>
.centerHeading {
  text-align: center;
  margin-top: 2%;
  margin-bottom: 2%;
}
</style>
