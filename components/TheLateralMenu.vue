<template>
    <aside class="lateral-menu">
        <ul>
            <li v-for="item in menuItems" :key="item.id">
                {{ item.name }}
            </li>
        </ul>
    </aside>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const menuItems = ref([]);

onMounted(() => {
    // Simulación de datos cargados
    menuItems.value = [
        { id: 1, name: 'Inicio' },
        { id: 2, name: 'Perfil' },
        { id: 3, name: 'Configuración' },
        { id: 4, name: 'Cerrar sesión' },
    ];
});
</script>
