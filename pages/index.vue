<template>
  <div class="layout">
    <NavBar class="navbar" />
    <LatMenu class="latmenu" />
    <Viewer class="main" />
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-areas:
    "navbar navbar"
    "latmenu main";
  grid-template-rows: 60px 1fr;
  grid-template-columns: 200px 1fr;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  grid-area: navbar;
  background: #2c3e50;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 1.2rem;
}

.latmenu {
  grid-area: latmenu;
  background: #527597;
  color: #fff;
  padding: 20px;
}

.main {
  grid-area: main;
  background: #ecf0f1;
  padding: 20px;
}

/* Remove margin from body and html to ensure no space around layout */
:global(html),
:global(body) {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
