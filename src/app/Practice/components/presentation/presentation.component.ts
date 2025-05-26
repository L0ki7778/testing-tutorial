import { Component, input } from '@angular/core';
import { User } from '../../practice-mock-data';

@Component({
  selector: 'app-presentation',
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {
  user = input.required<User>()

}
