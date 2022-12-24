<template>
  <div id="Table">
    <h2 class="centerHeading">Users List</h2>
    <div class="container">
      <div class="row">
        <div class="col">
          <select
            class="form-select"
            aria-label=".form-select-sm example"
            v-model="column"
            @change="$emit('searchColumnName',column)"
          >
            <option value="">Select Column to Search</option>
            <option v-for="column in columns" :key="column" :value="column">{{column}}</option>
          </select>
        </div>
        <div class="col">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Search</span>
            <input
              type="text"
              v-model="search"
              class="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
              @input="$emit('search', search)"
            />
          </div>
        </div>
      </div>
    </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Sr no.</th>
          <th scope="col">Name</th>
          <th scope="col">UserName</th>
          <th scope="col">Email</th>
          <th scope="col">website</th>
        </tr>
      </thead>
      <tbody v-if="!filterUsers && users && users.length">
        <tr v-for="(user, index) in users" :key="user.id">
          <td>{{ index + 1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.website }}</td>
        </tr>
      </tbody>
      <tbody v-if="filterUsers && filterUsers.length">
        <tr v-for="(user, index) in filterUsers" :key="user.id">
          <td>{{ index + 1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.website }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed, defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "Table",
  props: {
    values: {
      type: Array,
      required: true,
    },
    filterData: {
      type: Array,
      required: false
    }
  },
  setup(props) {
    const search = ref('');
    const column = ref('')
    const filterUsers = computed(() => {
        return props.filterData
    });
    console.log('filterUsers', filterUsers)
    const users = reactive(props.values);
    const columns = computed(() => {
        return Object.keys(props.values[0]);
    })

    return { users, search, column, columns, filterUsers };
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