import { defineStore } from 'pinia'
import type IStudent from '@/interfaces/IStudent'

export const useStudentStore = defineStore('student', {
  state: () => ({
    students: [] as IStudent[],
    selectedStudent: null as null | IStudent
  }),

  actions: {
    async getStudents() {
      try {
        const response = await fetch('https://65e8dab54bb72f0a9c508303.mockapi.io/dev/api/Alumnos')
        if (!response.ok) {
          throw new Error('No se pudo obtener los estudiantes')
        }
        const data = await response.json()
        this.students = data
      } catch (error) {
        console.error('Error al obtener estudiantes:', error)
      }
    },
    async getStudent(id: number): Promise<IStudent | null> {
      try {
        const response = await fetch(
          `https://65e8dab54bb72f0a9c508303.mockapi.io/dev/api/Alumnos/${id}`
        )
        if (!response.ok) {
          throw new Error('No se pudo obtener el estudiante')
        }
        return await response.json()
      } catch (error) {
        console.error('Error al obtener estudiante:', error)
        return null // Devolver null en caso de error
      }
    },
    async createStudent(student: IStudent) {
      try {
        const response = await fetch(
          'https://65e8dab54bb72f0a9c508303.mockapi.io/dev/api/Alumnos',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
          }
        )

        if (!response.ok) {
          throw new Error('No se pudo agregar el estudiante')
        }
        const data = await response.json()
        this.students.push(data)
      } catch (error) {
        console.error('Error al agregar estudiante:', error)
      }
    },

    async deleteStudent(id: number) {
      try {
        const response = await fetch(
          `https://65e8dab54bb72f0a9c508303.mockapi.io/dev/api/Alumnos/${id}`,
          {
            method: 'DELETE'
          }
        )

        if (!response.ok) {
          throw new Error('No se pudo eliminar el estudiante')
        }

        this.students = this.students.filter((student) => student.id !== id)
      } catch (error) {
        console.error('Error al eliminar el estudiante:', error)
      }
    }
  }
})
