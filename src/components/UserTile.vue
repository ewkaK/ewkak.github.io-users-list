<template>
  <div class="UserTile flex">
    <q-card class="UserTile__tile">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img :src="user.avatar">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            {{ user.first_name }} {{ user.last_name }}
          </q-item-label>

          <q-item-label caption>
            id: {{ user.id }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-card-section>
        name: {{ user.first_name }} {{ user.last_name }} <br />
        email: <a :href="`mailto:${user.email}`">{{ user.email }}</a>
      </q-card-section>

      <q-card-actions align="right">
        <router-link
          v-if="showDetailsLink"
          :to="`/user/${user.id}`"
          class="UserTile__detailsLink">
          <q-btn flat color="primary" label="details" />
        </router-link>
        <FavoriteButton :userId="user.id" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import FavoriteButton from "components/FavoriteButton.vue";

export default defineComponent({
  name: 'UserTile',

  components: {
    FavoriteButton
  },

  props: {
    user: {
      type: Object,
    },

    showDetailsLink: {
      type: Boolean,
      default: true
    },
  },
})
</script>

<style lang="scss" scoped>
.UserTile {
  &__tile {
    min-width: 300px;
  }

  &__detailsLink {
    text-decoration: none;
    display: block;
  }
}
</style>
