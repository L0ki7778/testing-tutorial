import { Component, inject } from '@angular/core';
import { HttpRequestService } from '../../services/http-request.service';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from '../playground/playground.component';


@Component({
  selector: 'app-simple-unit-test',
  imports: [CommonModule, PlaygroundComponent],
  templateUrl: './simple-unit-test.component.html',
  styleUrl: './simple-unit-test.component.scss'
})
export class SimpleUnitTestComponent {
  name = "Angular";
  version = 19;
  outputReciever: any = 'Hello World';

  pokemonService = inject(HttpRequestService);
  pokemon: any

  ngOnInit() {
    this.pokemonService.getPokemon('pikachu').subscribe((response) => {
      this.pokemon = response
    });

  }


  recieveOutput(output: Event, text: string) {
    this.outputReciever = output;
  }
}
