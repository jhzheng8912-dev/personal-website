<template>
  <div class="text-center">
    <p class="text-xs font-semibold tracking-widest uppercase mb-2" style="color: #00d4ff;">
      {{ subtitle }}
    </p>
    <h2 class="text-3xl font-bold text-white">{{ title }}</h2>
    <div class="mt-3 mx-auto w-10 h-px" style="background: linear-gradient(90deg, transparent, #00d4ff, transparent);" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>
