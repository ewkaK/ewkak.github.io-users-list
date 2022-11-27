<template>
  <div class="UserTile">
    <q-card>
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
        email: <a :href="`mailto:${user.email}`">{{ user.email }}</a>
        <router-link
          :to="`/users/${user.id}`"
          class="detailsLink">
          details
        </router-link>
      </q-card-section>

      <q-card-actions align="right">
        add to fav
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'UserTile',

  props: {
    user: {
      type: Object,
    }
  },
})
</script>
