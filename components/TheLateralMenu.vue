<script setup>
const objectTree = {
  objectid: 1,
  name: "Model",
  objects: [
    {
      objectid: 11,
      name: "L1 - Block 37",
      objects: [],
    },
    {
      objectid: 3264,
      name: "Mechanical Equipment",
      objects: [
        {
          objectid: 3265,
          name: "HeatRecoveryUnit",
          objects: [
            {
              objectid: 3267,
              name: "Heat Recovery Unit (HRU)",
              objects: [
                {
                  objectid: 3299,
                  name: "HeatRecoveryUnit [1367210]",
                  objects: [],
                },
                // ... otros objetos
              ],
            },
            // ... otros objetos
          ],
        },
      ],
    },
    {
      objectid: 3334,
      name: "Flex Ducts",
      objects: [
        {
          objectid: 3335,
          name: "Flex Duct Round",
          objects: [
            {
              objectid: 3337,
              name: "Flex - Round",
              objects: [
                {
                  objectid: 7868,
                  name: "Flex Duct Round [1474008]",
                  objects: [],
                },
                // ... otros objetos
              ],
            },
            // ... otros objetos
          ],
        },
      ],
    },
  ],
};

const emit = defineEmits(["send-object"]);

const handleSelectionChange = (object) => {
  emit("send-object", object);
};
</script>

<template>
  <ul>
    <li v-for="obj in objectTree.objects" :key="obj.objectid">
      <span @click="handleSelectionChange(obj)">{{ obj.name }}</span>
      <ul v-if="obj.objects.length">
        <li v-for="child in obj.objects" :key="child.objectid">
          <span @click="handleSelectionChange(child)">{{ child.name }}</span>
          <ul v-if="child.objects.length">
            <li v-for="grandChild in child.objects" :key="grandChild.objectid">
              <span @click="handleSelectionChange(grandChild)">{{
                grandChild.name
              }}</span>
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
}
</style>
