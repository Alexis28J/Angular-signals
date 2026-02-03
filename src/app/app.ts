import { Component, inject } from '@angular/core';
import { CounterService } from './services/counter-service/counter-service';
import { ControlsComponent } from "./components/controls-component/controls-component";
import { DisplayComponent } from "./components/display-component/display-component";
import { FlagComponents } from "./components/flag-components/flag-components";
import { ListComponents } from "./components/list-components/list-components";

@Component({
  selector: 'app-root',
  imports: [ControlsComponent, DisplayComponent, FlagComponents, ListComponents],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  //counter = inject(CounterService);
}
