<template>
  <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
      :max="totalPages"
      direction-links
    />
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'SimplePagination',

  props: {
    initialPage: {
      type: Number,
      default: 1,
    },
    totalPages: {
      type: Number,
      default: 2
    }
  },

  setup (props, ctx) {
    const current = ref(props.initialPage);

    watch(
      () => current.value,
      (page, prevPage) => {
        ctx.emit('change', page)
      }
    )

    return {
      current
    }
  }
})
</script>
