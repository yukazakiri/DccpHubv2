<script setup>
import Separator from '@/Components/shadcn/ui/separator/Separator.vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  class: { type: null, required: false }
})
</script>

<template>
  <Separator
    data-sidebar="separator"
    :class="cn('mx-2 w-auto bg-sidebar-border', props.class)"
  >
    <slot />
  </Separator>
</template>
