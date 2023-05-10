<template>
  <header class="w-full">
    <div class="flex justify-between">
      <img src="@/assets/images/LOGO.png" alt="" />
      <div class="font-monospace text-2xl font-bold">{{ count }}</div>
    </div>
    <div class="h-0.5 w-full bg-slate-800 mt-4"></div>
  </header>
</template>
<script>
export default {
  props: {
    count: {
      type: String,
      required: true,
    },
  },
  name: 'Header',
};
</script>
