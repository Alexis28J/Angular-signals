import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter-service/counter-service';

@Component({
  selector: 'app-controls-component',
  imports: [],
  templateUrl: './controls-component.html',
  styleUrl: './controls-component.scss',
})
export class ControlsComponent {
  counter = inject(CounterService);
}
