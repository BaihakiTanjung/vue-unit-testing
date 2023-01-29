<script setup lang="ts">
import ButtonBase from "@/components/Base/ButtonBase.vue";
import InputBase from "@/components/Base/InputBase.vue";
import { reactive, ref } from "vue";

const form = reactive({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const isSubmit = ref(false);
const handleSubmit = () => {
  isSubmit.value = true;
};
</script>
<template>
  <div class="register">
    <h1>Register</h1>

    <form @submit.prevent="handleSubmit">
      <InputBase label="Username" type="text" v-model="form.username" />

      <InputBase label="Email" type="email" v-model="form.email" />

      <InputBase label="Password" type="password" v-model="form.password" />

      <InputBase
        label="Confirm Password"
        type="password"
        v-model="form.confirmPassword"
      />

      <ButtonBase label="Register" type="submit" />
    </form>

    <pre v-if="isSubmit">{{ form }}</pre>
  </div>
</template>
<style scoped>
h1 {
  font-size: 3rem;
  font-weight: 700;
  color: rgb(172, 169, 169);
  text-align: center;
}
</style>
