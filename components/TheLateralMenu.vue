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
                    "objectid": 3299,
                    "name": "HeatRecoveryUnit [1367210]",
                    "objects": []
                },
                {
                    "objectid": 4099,
                    "name": "HeatRecoveryUnit [1412217]",
                    "objects": []
                },
                {
                    "objectid": 4100,
                    "name": "HeatRecoveryUnit [1412519]",
                    "objects": []
                },
                {
                    "objectid": 4989,
                    "name": "HeatRecoveryUnit [1438085]",
                    "objects": []
                },
                {
                    "objectid": 4990,
                    "name": "HeatRecoveryUnit [1438093]",
                    "objects": []
                },
                {
                    "objectid": 5264,
                    "name": "HeatRecoveryUnit [1447266]",
                    "objects": []
                },
                {
                    "objectid": 5307,
                    "name": "HeatRecoveryUnit [1450136]",
                    "objects": []
                },
                {
                    "objectid": 5542,
                    "name": "HeatRecoveryUnit [1460035]",
                    "objects": []
                },
                {
                    "objectid": 5824,
                    "name": "HeatRecoveryUnit [1464223]",
                    "objects": []
                },
                {
                    "objectid": 5922,
                    "name": "HeatRecoveryUnit [1464783]",
                    "objects": []
                },
                {
                    "objectid": 6096,
                    "name": "HeatRecoveryUnit [1465049]",
                    "objects": []
                },
                {
                    "objectid": 6266,
                    "name": "HeatRecoveryUnit [1465348]",
                    "objects": []
                },
                {
                    "objectid": 6267,
                    "name": "HeatRecoveryUnit [1465349]",
                    "objects": []
                },
                {
                    "objectid": 6531,
                    "name": "HeatRecoveryUnit [1465868]",
                    "objects": []
                },
                {
                    "objectid": 6687,
                    "name": "HeatRecoveryUnit [1466287]",
                    "objects": []
                },
                {
                    "objectid": 6827,
                    "name": "HeatRecoveryUnit [1466527]",
                    "objects": []
                },
                {
                    "objectid": 6938,
                    "name": "HeatRecoveryUnit [1466747]",
                    "objects": []
                },
                {
                    "objectid": 6939,
                    "name": "HeatRecoveryUnit [1466748]",
                    "objects": []
                },
                {
                    "objectid": 7203,
                    "name": "HeatRecoveryUnit [1467246]",
                    "objects": []
                },
                {
                    "objectid": 7354,
                    "name": "HeatRecoveryUnit [1467405]",
                    "objects": []
                },
                {
                    "objectid": 7489,
                    "name": "HeatRecoveryUnit [1467552]",
                    "objects": []
                },
                {
                    "objectid": 7610,
                    "name": "HeatRecoveryUnit [1467825]",
                    "objects": []
                },
                {
                    "objectid": 7727,
                    "name": "HeatRecoveryUnit [1468445]",
                    "objects": []
                },
                {
                    "objectid": 7728,
                    "name": "HeatRecoveryUnit [1468532]",
                    "objects": []
                },
                {
                    "objectid": 8119,
                    "name": "HeatRecoveryUnit [1484034]",
                    "objects": []
                },
                {
                    "objectid": 9388,
                    "name": "HeatRecoveryUnit [1517852]",
                    "objects": []
                }
            ]
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
              ],
            },
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
</style>
