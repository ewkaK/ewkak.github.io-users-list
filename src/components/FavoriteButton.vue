<template>
  <q-btn
    @click="onFavorite"
    flat round :color="isActive ? 'red' : 'blue'"
    icon="favorite"
  />
</template>

<script>
import { defineComponent, computed } from "vue";
import { useUserStore } from 'stores/users';

export default defineComponent({
  name: 'FavoriteButton',

  props: {
    userId: {
      type: Number
    }
  },

  setup(props) {
    const store = useUserStore();
    const favoritesList = store.favoritesList;

    const isActive = computed(() => {
      return favoritesList.length ?
        favoritesList.includes(props.userId)
        : false;
    });

    const onFavorite = () => {
      isActive.value ?
        store.removeFavorite(props.userId)
        : store.setFavorite(props.userId)
    }

    return {
      isActive,
      onFavorite
    }
  }
})
</script>
