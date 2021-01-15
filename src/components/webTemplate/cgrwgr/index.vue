<template>
  <div class="cgrwgr">
    
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const templateInfo = ref({
      tag: 'body',
      type: '',
      attr: '',
      name: '',
      style: {
      },
      children: [
        {
          tag: 'div',
          type: 'head',
          attr: '',
          name: '',
          style: {
          },
        },
        {
          tag: 'div',
          type: 'main',
          attr: '',
          name: '',
          style: {
            wdith: 1200
          },
          children: {

          }

        }
      ]
    })

    return {
      templateInfo
    }
  }
})
</script>

<style scoped>

</style>