<script setup lang="ts">
defineProps<{
  label?: string;
  type?: string;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const onClick = () => {
  emit("click");
};
</script>

<template>
  <button class="btn" @click="onClick">{{ label }}</button>
</template>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
}
</style>
