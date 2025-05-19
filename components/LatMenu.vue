<template>
  <div class="lat-menu">
    <ul>
      <li><a href="#">null</a></li>
      <li><a href="#">null</a></li>
      <li><a href="#">null</a></li>
      <li><a href="#">null</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LatMenu",
};
</script>

<style scoped>
.lat-menu ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.lat-menu li a {
  text-decoration: none;
  color: #e6e6e6;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background 0.2s;
}

.lat-menu li a:hover {
  background: #e0e0e0;
}
</style>
