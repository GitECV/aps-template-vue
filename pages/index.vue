<template>
  <TheLateralMenu ref="lateralMenu" @send-object="getSelectedTreeObject" />
  <TheAutodeskViewer ref="autodeskViewer" @send-autodesk-object-tree="getAutodeskObjectTree" />
</template>

<script setup>
const autodeskViewer = ref(null);
const lateralMenu = ref(null);

const getSelectedTreeObject = (object) => {
  autodeskViewer.value.sendTreeObject(object);
};

const getAutodeskObjectTree = (objectTree) => {
  lateralMenu.value.getObjectTree(objectTree);
}

</script>
