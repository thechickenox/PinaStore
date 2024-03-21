<template>
  <div>
    <h2>Agregar Estudiante</h2>
    <form @submit.prevent="addStudent">
      <label for="name">Nombre:</label>
      <input type="text" id="name" v-model="name" required><br>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required><br>
      <label for="group">Grupo:</label>
      <input type="text" id="group" v-model="group" required><br>
      <button type="submit">Agregar</button>
    </form>
    <router-link to="/StudentsList">Volver a la lista de estudiantes</router-link>
  </div>
</template> 

<script setup lang="ts">
import { ref } from 'vue';
import { useStudentStore } from '@/stores/StudentsData';

const { createStudent } = useStudentStore();
const name = ref('');
const email = ref('');
const group = ref('');

const addStudent = () => {
  const newStudent = {
    id: Date.now(), 
    name: name.value,
    email: email.value,
    group: group.value,
  };
  createStudent(newStudent);
  name.value = '';
  email.value = '';
  group.value = '';
};
</script>
