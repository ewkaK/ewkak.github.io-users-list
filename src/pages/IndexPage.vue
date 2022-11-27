<template>
  <q-page class="flex flex-center">

  </q-page>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { useUserStore } from 'stores/users'
import { storeToRefs } from "pinia";

export default defineComponent({
  name: 'IndexPage',

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
