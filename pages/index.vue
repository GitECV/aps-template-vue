<template>
  <TheLateralMenu @enviar-objeto="getSelectedTreeObject" />
  <TheAutodeskViewer ref="autodeskViewer" />
</template>

<script setup>
const autodeskViewer = ref(null);
const getSelectedTreeObject = (object) => {
  autodeskViewer.value.sendTreeObject(object);
};
</script>
