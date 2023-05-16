<script setup>
import { useIsFormDirty, useIsFormValid } from 'vee-validate';
import { computed } from 'vue';

const isDirty = useIsFormDirty();
const isValid = useIsFormValid();

const isDisabled = computed(() => {
  return !isDirty.value || !isValid.value;
});
</script>

<template>
  <button :disabled="isDisabled">
    დასრულება
  </button>
</template>
