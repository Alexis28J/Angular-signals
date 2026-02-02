import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmotionService {

  emotion = signal ('happy');

  setSad(){
    this.emotion.set('sad');   //set() è un metodo delle signal per aggiornare il valore
  }
  
  setHappy(){
    this.emotion.set('happy');
  }
}
