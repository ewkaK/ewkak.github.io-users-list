<template>
  <q-page class="flex flex-center">
    <div class="UserPage flex">
      <router-link
        to="/"
        class="UserPage__backLink">
        <q-btn color="primary" label="Back to list" />
      </router-link>

      <UserTile
        v-if="userDetails"
        :user=userDetails
        :showDetailsLink="false"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useRoute } from 'vue-router';
import { useUserStore } from "stores/users";
import { storeToRefs } from "pinia";

import UserTile from "components/UserTile.vue";

export default defineComponent({
  name: 'UserPage',

  components: {
    UserTile
  },

  setup() {
    const route = useRoute()
    const store = useUserStore();
    const { userDetails } = storeToRefs(store);

    onMounted( () => {
      store.getUserDetails(route.params.id);
    })

    return {
      userDetails
    }
  }
})
</script>

<style lang="scss" scoped>
.UserPage {
  flex-direction: column;
  gap: 16px;

  &__backLink {
    text-decoration: none;
  }
}
</style>
