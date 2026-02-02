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

  counter = inject(CounterService);

  emotionServ = inject(EmotionService);

  state = signal('');  // definisco un signal chiamato state che inizializzo con una stringa vuota

  constructor(){
    //console.log('flag-component', this.counter.count());  //count() è un metodo di CounterService 
    //ricorda che i signal si devono loggare con le parentesi tonde

    effect(() => { //effect è un ascoltatore di signal CHE CAMBIANO e perché funzioni ha bisogno che io gli passi una funzione
      console.log('flag', this.counter.count())
      console.log('flag 2', this.emotionServ.emotion())

      if ( this.counter.interval !== null ) {   //CORREGGERE
        this.state.set("I'm " + this.emotionServ.emotion() + " and I'm counting " + this.counter.count())
      } else {
        this.state.set("I'm " + this.emotionServ.emotion() + " and I'm not counting " + this.counter.count())
      }
      }); 
  }
}
