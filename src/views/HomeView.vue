<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <h1>Vue Unit Testing</h1>
    <div>
      <router-link id="register" to="/register">REGISTER</router-link>
    </div>
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  color: rgb(172, 169, 169);
}

a {
  text-decoration: none;
  color: rgb(172, 169, 169);
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border: 1px solid rgb(172, 169, 169);
  border-radius: 4px;
  transition: all 0.3s ease;
}

div {
  margin-top: 1rem;
}
</style>
