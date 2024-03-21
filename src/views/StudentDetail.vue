<template>
  <div v-if="student">
    <h1>Detalles del Estudiante</h1>
    <p>Nombre: {{ student.name }}</p>
    <p>Correo Electrónico: {{ student.email }}</p>
  </div>
  <div v-else>
    <p>Cargando...</p>
  </div>
</template>

<script setup lang="ts">
import { useStudentStore } from '@/stores/StudentsData';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import type IStudent from '@/interfaces/IStudent' 

const { getStudent } = useStudentStore();
const student = ref<IStudent | null>(null);

onBeforeMount(async () => {
  const route = useRoute();
  const id = parseInt(route.params.id as string, 10);
  const fetchedStudent = await getStudent(id);

  student.value = fetchedStudent; // Asigna el estudiante obtenido
});
</script>
