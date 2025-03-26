<script setup>
const files = ref([
  {
    name: "StairSamples(11111).rvt",
    urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZHpremtwdnR0ZGJtZzRhaG5nZDhua2drZ21heGNteWFia3dva3d0am40dXd5OW53LWJhc2ljLWFwcC9TdGFpclNhbXBsZXMoMTExMTEpLnJ2dA=="
  },
  {
    name: "Snowdon Towers Sample HVAC.rvt",
    urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZHpremtwdnR0ZGJtZzRhaG5nZDhua2drZ21heGNteWFia3dva3d0am40dXd5OW53LWJhc2ljLWFwcC9Tbm93ZG9uJTIwVG93ZXJzJTIwU2FtcGxlJTIwSFZBQy5ydnQ="
  },
  {
    name: "Snowdon+Towers+Sample+Facades.rvt",
    urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZHpremtwdnR0ZGJtZzRhaG5nZDhua2drZ21heGNteWFia3dva3d0am40dXd5OW53LWJhc2ljLWFwcC9Tbm93ZG9uK1Rvd2VycytTYW1wbGUrRmFjYWRlcy5ydnQ="
  }
]);

const onCLickMostrar = (e) => {
  console.log("MOSTRAR: ", e.target.id)
}

const onClickOcultar = (e) => {
  console.log("OCULTAR: ", e.target.id)
}
</script>

<template>
<div>
  <ul>
    <li v-for="file in files" :key="file.urn" class="file-item">
      <span>{{ file.name }}</span>
      <div>
        <button @click="onCLickMostrar" :id="file.urn">Mostrar</button>
        <button @click="onClickOcultar" :id="file.urn">Ocultar</button>
      </div>
    </li>
  </ul>
</div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 20px;
}

li {
  cursor: pointer;
  border: 1px solid #ccc; /* Add border */
  margin-bottom: 10px; /* Add spacing between items */
  padding: 10px; /* Add padding inside the border */
  border-radius: 5px; /* Optional: rounded corners */
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
