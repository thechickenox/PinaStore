<template>

  <div>
    <h1>Lista de Estudiantes</h1>
    <ul>
      <li v-for="student in students" :key="student.id">
        {{ student.name }} - {{ student.email }}
        <button @click="handleDelete(student.id)">Eliminar</button>
        <router-link :to="'/StudentDetail/' + student.id">Ver Detalles</router-link>
      </li>
    </ul>
    <router-link to="/AddStudent">Agregar Estudiante</router-link>
  </div>
   


</template>

<script setup lang="ts">
import { useStudentStore } from '@/stores/StudentsData';
import { onMounted, ref, type Ref } from 'vue'
import type IStudent from '@/interfaces/IStudent'

const StudentsData = useStudentStore();
const students: Ref<IStudent[]> = ref([])

onMounted(async () =>{
  await StudentsData.getStudents()
  students.value = StudentsData.students

}
);

const handleDelete = (id: number) => {
   StudentsData.deleteStudent(id);
};
</script>
