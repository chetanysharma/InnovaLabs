<template>
  <div id="table">
    <Table v-if="users && users.length" :values="users" :filterData="filterData" @search="searchItem"/>
  </div>
</template>

<script>
import { computed, onBeforeMount, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import api from "../../services/users";
import Table from "../shared/Table.vue";
export default defineComponent({
  name: "Users",
  components: {
    Table,
  },
  setup() {
    const store = useStore();
    const filterData = ref([]);
    const users = computed(() => {
      return store.getters.getUsers;
    });
    filterData.value = users.value;
    onBeforeMount(async () => {
      const response = await api.getUsers();
      store.dispatch("setUsers", response);
    });

    const searchItem = (search) => {
      if (!users.value.length) {
        return []
      }
      
      filterData.value = users.value.filter(item => {
        return search.toLowerCase().split(' ').every(v => item['name'].toLowerCase().includes(v) || item['email'].toLowerCase().includes(v) || item['username'].toLowerCase().includes(v) || item['website'].toLowerCase().includes(v))
      })

    }

    return { users, searchItem, filterData  };
  },
});
</script>