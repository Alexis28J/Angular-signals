import { Injectable, signal, WritableSignal } from '@angular/core';
import { Student } from '../../model/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  //students = signal([]);  se lo scrivo così non dico niente ad Angular

  students = signal<Student[]>([]);  //students è un signal che contiene un array di Student
  // students:WritableSignal<Student[]> = signal ([]);  //è l'equivalente a quello di prim

  constructor() {  //il construttore deve essere la prima cosa che viene eseguita (non è obbligatorio ma è buona norma)

    const pippo: Student = {
      name: 'pippo',
      age: 12
    }

    const pluto: Student = {
      name: 'pluto',
      age: 24
    }

    const paperino: Student = {
      name: 'paperino',
      age: 16
    }

    const newStudents = [pippo, pluto, paperino];

    this.students.set(newStudents);
  }

  orderStudentsByAge() {  //questa funzione la faremo pezzo per pezzo
    this.students.update((oldStudents) => this.updateStudentsOrderingByAge(oldStudents));
  }
  updateStudentsOrderingByAge(oldStudents: Student[]){
   oldStudents.sort(this.compareStudentByAge)
   return oldStudents;
  }
  compareStudentByAge(student1: Student, student2: Student){
    const age1 = student1.age;
    const age2 = student2.age; 
    return age1 - age2;
  }


  orderStudentsByName() { //questa la scriviamo in maniera lambda
    this.students.update(oldStudents => oldStudents.sort((s1, s2) => s1.name.localeCompare(s2.name)));
    //update prende in input una funzione che riceve il valore vecchio e restituisce il valore nuovo
  }
}
