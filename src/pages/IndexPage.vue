<template>
  <q-page class="flex flex-center UsersList">
    <div class="UsersList__list">
      <UserTile
        v-for="user in usersList"
        :key="user.id"
        :user=user
      />

      <Pagination
        :totalPages= totalPages
        :initial-page= currentPage
        @change="onChangePage"
      />
    </div>

  </q-page>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { useUserStore } from 'stores/users'
import { storeToRefs } from "pinia";

import UserTile from 'components/UserTile.vue'
import Pagination from "components/Pagination.vue";

export default defineComponent({
  name: 'IndexPage',

  components: {
    UserTile,
    Pagination
  },

  setup() {
    const store = useUserStore();
    const { usersList, currentPage, totalPages } = storeToRefs(store);

    onMounted( () => {
      store.getUsersList();
      store.getFavoritesList();
    })

    const onChangePage = (page) => {
      currentPage.value = page;
      store.getUsersList()
    }

    return {
      usersList,
      currentPage,
      totalPages,
      onChangePage
    }
  }
})
</script>

<style lang="scss" scoped>
.UsersList {
  margin: 16px auto;

  &__list{
    display: grid;
    grid-gap: 16px;
  }
}
</style>
