import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {

interval: number | null = null 
 //interval: number = 1;
 //interval?:number  

 //count = 0;  //definiamo una proprietà count inizializzata a 0
 //count = signal(0);  //di default questo è già un Writable signal
 count: WritableSignal<number> = signal(0);  //è equivalente a count = signal(0)
 //definiamo una proprietà count come un segnale scrivibile di tipo numero inizializzato a 0
 //signal serve per creare un segnale reattivo che può essere osservato e aggiornato

 counterState: WritableSignal<string> = signal('Not counting')

 doubleCount = computed(() => this.count() * 2);  //un computed signal viene inizializzato con una funzione  //funzione che raddoppia il counter
 // il computed signal DIPENDE da altri signal
 
  increment(){
   //this.count++;   //usiamo this per riferirci alla proprietà della classe
   this.count.update((oldValue) => oldValue +1)
   //console.log(this.count);
   //console.log(this.count());
  }

  decrement(){
    //this.count--;
    this.count.update((old) => old - 1)
    //console.log(this.count);
    //console.log(this.count());
    
  }

  reset(){
    //this.count = 0;
    this.count.set(0);
    //console.log(this.count);
    //console.log(this.count());  //se voglio vedere cosa c'è dentro un signal devo metterlo con le tonde count() invece di count
  }

  // start(){
  //    setInterval(() => {  //setInterval ripete n volte una istruzione javascript
  //     this.increment()
  //    }, 1000);    //1000 millisecondi = 1 secondo, l'app si ripete ogni secondo
  // }

  // start(){
  //   this.interval = setInterval(() => {
  //     this.increment()
  //   }, 1000)
  // }

    start(){
    if (this.interval === null) {
      this.interval = setInterval(() => {
      this.increment();
    }, 1000)
      }
  }

  // stop(){
  //  clearInterval(this.interval);
  // }

    stop(){
    if (this.interval !== null) {
      clearInterval(this.interval);  //clearInterval ferma l'intervallo //this.interval è l'id dell'intervallo
      this.interval = null;  // imposto l'intervallo a null per indicare che non c'è nessun intervallo attivo
      //se non faccio questo passaggio, quando richiamo start() non parte più l'intervallo perchè this.interval è diverso da null
      //e se voglio che mi mostri lo stato "Not counting" nel flag-component quando fermo il contatore, counterState deve essere aggiornato
      this.counterState.set('Not counting');  //ma per aggiornare counterState quando fermo il contatore, devo mettere l'effetto dentro CounterService
      console.log(this.counterState()); 
    }
  }
 } 
