import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-playground',
  imports: [],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {
  name = 'Superstar';
  guest = 'guest'

  constructor() {
    // this.changeGuestName("max")
  }

  @Output() changeEmitter = new EventEmitter<string>();

  emitNewName(): void {
    this.changeEmitter.emit(this.guest);
  }

  changeGuestName(name: string) {
    this.guest = name;
  }
}
