import { Component } from '@angular/core';
import { StudentService } from '../../services/student-service/student-service';
import { OrderComponents } from "../order-components/order-components";

@Component({
  selector: 'app-list-components',
  imports: [OrderComponents],
  templateUrl: './list-components.html',
  styleUrl: './list-components.scss',
})
export class ListComponents {

  //modo alternativo (vecchio) di "inject" cioè di importare un servizio
  constructor (public studentServ: StudentService) {}


//Metodo alternativo per far communicare i componenti senza usare un servizio (vedi order-components.html, order-components.ts, list-component.html, list-component.ts e student-service.ts)
 orderByName(isAscending: boolean){
 console.log('List component - Order by name');
 console.log('Is ascending: ', isAscending);
 
 this.studentServ.orderStudentsByName(isAscending);  
 }

 orderByAge(){
 console.log('List component - Order by age');
 this.studentServ.orderStudentsByAge();
 }

}
