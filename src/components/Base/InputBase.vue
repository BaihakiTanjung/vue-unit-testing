<script setup lang="ts">
defineProps<{
  id?: string;
  label?: string;
  type?: string;
  modelValue?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event: any) => {
  emit("update:modelValue", event.target.value);
};
</script>
<template>
  <div class="form-group">
    <label :for="label">{{ label }}</label>
    <input :id="id" :type="type" :value="modelValue" @input="updateValue" />
  </div>
</template>
<style scoped>
.form-group {
  margin-bottom: 1rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>