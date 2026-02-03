import { Component, effect, inject, signal } from '@angular/core';
import { CounterService } from '../../services/counter-service/counter-service';
import { EmotionService } from '../../services/emotion-service/emotion-service';

@Component({
  selector: 'app-flag-components',
  imports: [],
  templateUrl: './flag-components.html',
  styleUrl: './flag-components.scss',
})
export class FlagComponents {

  counter = inject(CounterService);   //counter è una proprietà della classe FlagComponents che viene inizializzata con il servizio CounterService usando la funzione inject() di Angular. 
   //in questo modo possiamo accedere alle proprietà e ai metodi del servizio CounterService all'interno della classe FlagComponents

  emotionServ = inject(EmotionService);

  state = signal('');  // definisco un signal chiamato state che inizializzo con una stringa vuota  //questo signal conterrà lo stato combinato del contatore e dell'emozione

  constructor(){
    //console.log('flag-component', this.counter.count());  //count() è un metodo di CounterService 
    //ricorda che i signal si devono loggare con le parentesi tonde

    effect(() => {   //effect è un ascoltatore di signal CHE CAMBIANO e perché funzioni ha bisogno che io gli passi una funzione
      
      // console.log('flag', this.counter.count())
      // console.log('flag 2', this.emotionServ.emotion())

      //NON FUNZIONA
      // if ( this.counter.interval !== null ) {   // se l'intervallo è diverso da null
      //   this.state.set("I'm " + this.emotionServ.emotion() + " and I'm counting " + this.counter.count()) //allora cambio lo stato del signal state con una stringa che contiene l'emozione e il contatore
      // } 
      // else {  //altrimenti
      //   this.state.set("I'm " + this.emotionServ.emotion() + " and " + this.counter.counterState()) //cambio lo stato del signal state con una stringa che contiene l'emozione e lo stato del contatore
      // } 

      //CORREZIONE
       this.state.set("I'm " + this.emotionServ.emotion() + " and I'm " + this.counter.counterState())
      }); 
  }
}
