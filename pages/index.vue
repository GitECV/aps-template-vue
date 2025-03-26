<template>
  <div class="layout">
    <TheLateralMenu class="lateral-menu" />
    <TheAutodeskViewer class="viewer" />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden; /* Evita el scroll horizontal */
}

.lateral-menu {
  width: 250px; /* Ajusta el ancho según sea necesario */
  background-color: #f4f4f4; /* Color de fondo opcional */
  flex-shrink: 0; /* Evita que el menú lateral se reduzca */
  overflow: hidden;
}

.viewer {
  flex-grow: 1; /* Ocupa el espacio restante */
  overflow: hidden; /* Evita el scroll dentro del viewer */
  background-color: #eaeaea; /* Color de fondo opcional */
  width: 100%; /* Asegura que el viewer ocupe todo el ancho disponible */
  height: 100%; /* Asegura que el viewer ocupe toda la altura disponible */
}
</style>
