<template>
  <q-page class="flex flex-center UsersList">
    <div class="UsersList__list">
      <UserTile
        v-for="user in usersList"
        :key="user.id"
        :user=user />
    </div>

  </q-page>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { useUserStore } from 'stores/users'
import { storeToRefs } from "pinia";

import UserTile from 'components/UserTile.vue'

export default defineComponent({
  name: 'IndexPage',

  components: {
    UserTile,
  },

  setup() {
    const store = useUserStore();
    const { usersList } = storeToRefs(store);

    onMounted( () => {
      store.getUsersList();
    })

    return {
      usersList,
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
