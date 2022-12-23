<template>
  <div id="table">
    <Table v-if="users && users.length" :values="users" :filterData="filterData" @search="searchItem" @searchColumnName="searchColumnName" />
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
    const column = ref('');
    const users = computed(() => {
      return store.getters.getUsers;
    });
    filterData.value = users.value;
    onBeforeMount(async () => {
      const response = await api.getUsers();
      store.dispatch("setUsers", response);
    });

    const searchColumnName = (searchColumn) => {
      console.log('searchName', searchColumn)
      column.value = searchColumn
    }

    const searchItem = (search) => {
      if (!users.value.length) {
        return []
      }
      
      filterData.value = users.value.filter(item => {
        return search.toLowerCase().split(' ').every(v => item[column.value || 'name'].toLowerCase().includes(v))
      })

    }

    return { users, searchItem, filterData, searchColumnName  };
  },
});
</script>