<template>
  <nav>
    <ul>
          <li>
            <router-link to="/jd">Anyayahan</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'kenneth' }">Domingo</router-link>
          </li>
          <li>
            <router-link to="/ayen">Milante</router-link>
          </li>
        </ul>
  </nav> 
</template>

<script>
  export default {
    name: "NavBar",
};
</script>

<style scoped>

</style>