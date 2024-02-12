<template>
  <header class="app-header">
    <div class="logo">Mr.Bitcoin</div>
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'contact' }">Contacts</RouterLink>
      <RouterLink :to="{ name: 'stats' }">Stats</RouterLink>
    </nav>
  </header>
</template>

<style lang="scss">
.app-header {
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 10px;
  }
}
</style>
