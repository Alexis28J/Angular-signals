import { Component, output } from '@angular/core';

@Component({
  selector: 'app-order-components',
  imports: [],
  templateUrl: './order-components.html',
  styleUrl: './order-components.scss',
})
export class OrderComponents {

//Metodo alternativo per far communicare i componenti senza usare un servizio (vedi order-components.html, order-components.ts, list-component.html, list-component.ts e student-service.ts)
//2 output
orderByAgePressed = output();   //quando viene cliccato il pulsante
orderByNamePressed = output<boolean>();  //output di tipo booleano

isAscending = true;  // variabile per tenere traccia dell'ordinamento

orderByAge() {   //metodo per ordinare per età
console.log('Order component - Order by age');
this.orderByAgePressed.emit();  //significa che viene emesso un messaggio
//emit() invia messaggi grazie agli output

}
orderByName() {
console.log('Order component - Order by name');
this.orderByNamePressed.emit(this.isAscending);  //significa che viene emesso un messaggio con il valore di isAscending

// if (this.isAscending === true) {  //questo serve per alternare l'ordine
//   this.isAscending = false;   //una volta che viene cliccato il pulsante, isAscending diventa false e quindi l'ordinamento sarà decrescente
// } else {
//   this.isAscending = true;
// }
//versione simplificata - è equivalente a quella precedente
this.isAscending = !this.isAscending;  
}

}
