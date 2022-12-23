<template>
  <div id="displayBlock">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Sr no.</th>
          <th scope="col">Guest Name</th>
          <th scope="col">Date of Birth</th>
          <th scope="col">Minor</th>
        </tr>
      </thead>
      <tbody v-if="guests && guests.length">
        <tr v-for="(guest, index) in guests" :key="guest.id">
          <td>{{ index + 1 }}</td>
          <td>{{ guest.PERSON_NAME }}</td>
          <td>{{ guest.PERSON_DOB }}</td>
          <td>{{ guest.IS_PERSON_MINOR }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent, ref, inject } from "vue";

export default defineComponent({
  setup() {
    const emitter = inject("emitter");
    const guests = ref([]);

    emitter.on("passGuestData", (data) => {
      try {
        guests.value = [...guests.value, ...[data]];
      } catch (err) {
        console.log("error", err);
      }
    });

    return { guests };
  },
});
</script>
