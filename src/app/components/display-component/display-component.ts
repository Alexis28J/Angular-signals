import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter-service/counter-service';

@Component({
  selector: 'app-display-component',
  imports: [],
  templateUrl: './display-component.html',
  styleUrl: './display-component.scss',
})
export class DisplayComponent {
 counter = inject(CounterService);
}
