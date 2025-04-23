import { Component, inject } from '@angular/core';
import { HttpRequestService } from '../../services/http-request.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-simple-unit-test',
  imports: [CommonModule],
  templateUrl: './simple-unit-test.component.html',
  styleUrl: './simple-unit-test.component.scss'
})
export class SimpleUnitTestComponent {
  name = "Angular";
  version = 19

  pokemonService = inject(HttpRequestService);
  pokemon: any

  ngOnInit() {
    this.pokemonService.getPokemon('pikachu').subscribe((response) => {
      this.pokemon = response
    });

  }

}
