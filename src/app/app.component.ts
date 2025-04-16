import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleUnitTestComponent } from './components/simple-unit-test/simple-unit-test.component';
import { PlaygroundComponent } from './components/playground/playground.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SimpleUnitTestComponent, PlaygroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testing-tutorial';
}
