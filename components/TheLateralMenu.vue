<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(["send-object"]);
const objectTree = ref(null);

const handleSelectionChange = (object) => {
  emit("send-object", object);
};

const getObjectTree = (tree) => {
  objectTree.value = tree;
};

defineExpose({ getObjectTree });

watch(objectTree, (newTree) => {
  if (newTree) {
    console.log("Object tree updated:", newTree);
  }
});
</script>

<template>
  <ul v-if="objectTree">
    <li v-for="obj in objectTree.objects" :key="obj.objectid">
      <span @click="handleSelectionChange(obj)">{{ obj.name }}</span>
      <ul v-if="obj.objects.length">
        <li v-for="child in obj.objects" :key="child.objectid">
          <span @click="handleSelectionChange(child)">{{ child.name }}</span>
          <ul v-if="child.objects.length">
            <li v-for="grandChild in child.objects" :key="grandChild.objectid">
              <span @click="handleSelectionChange(grandChild)">{{ grandChild.name }}</span>
              <ul v-if="grandChild.objects.length">
                <li v-for="greatGrandChild in grandChild.objects" :key="greatGrandChild.objectid">
                  <span @click="handleSelectionChange(greatGrandChild)">{{ greatGrandChild.name }}</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 20px;
}

li {
  cursor: pointer;
}

li span:hover {
  text-decoration: underline;
  color: green;
}

ul {
  height: 100vh; /* Full height of the viewport */
  overflow-y: auto;
}
</style>
