<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <a href="#">APS Viewer</a>
        </div>
        <ul class="navbar-links">
            <li><a href="#">null</a></li>
            <li><a href="#">null</a></li>
            <li><a href="#">null</a></li>
        </ul>
    </nav>
</template>

<script setup>
</script>
<style scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #2c3e50;
    padding: 0.5rem 1.5rem;
    color: #fff;
}

.navbar-brand a {
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
}

.navbar-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
}

.navbar-links li a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.2s;
}

.navbar-links li a:hover {
    color: #1abc9c;
}
</style>
