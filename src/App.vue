<script setup>

</script>

<template>
  <div class="head">
    <p class="fw-500">Todo </p>
    <div>
      <img src="./assets/user/user.jpg" alt="user-img" width="50px" height="50px" class="img-responsive">
    </div>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

nav {
  display: flex;
  gap: 10px;
}

nav a {
  padding: 10px 15px;
  border-radius: 8px;
  color: black;
}

nav a:hover,
nav a.router-link-active {
  background-color: #fbedf2;
  color: #bd2b68;
}

.head {
  background-color: #ffffff;
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.img-responsive {
  object-fit: contain;
  width: 30px;
  height: 30px;
  border-radius: 100px;
}

.fw-500 {
  font-weight: 500;
}
</style>
