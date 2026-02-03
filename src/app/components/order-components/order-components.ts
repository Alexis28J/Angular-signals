import { Component, output } from '@angular/core';

@Component({
  selector: 'app-order-components',
  imports: [],
  templateUrl: './order-components.html',
  styleUrl: './order-components.scss',
})
export class OrderComponents {

  //Metodo alternativo per far communicare i componenti senza usare un servizio 
  //(vedi order-components.html, order-components.ts, list-component.html e list-component.ts)
  //2 output
orderByAgePressed = output();   //quando viene cliccato il pulsante
orderByNamePressed = output();

orderByAge() {   //metodo per ordinare per età
console.log('Order component - Order by age');
this.orderByAgePressed.emit();  //emit() invia messaggi grazie agli output

}
orderByName() {
console.log('Order component - Order by name');
this.orderByNamePressed.emit();

}

}
