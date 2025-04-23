import { Component, EventEmitter, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-playground',
  imports: [],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {
  name = 'Superstar';
  guest = 'guest'
  greeting = input.required<string>()

  constructor() {
    // this.changeGuestName("max")
  }

  changeEmitter = output<string>()

  emitNewName(): void {
    if (this.guest.length < 1) return
    this.changeEmitter.emit(this.guest);
  }

  changeGuestName(name: string) {
    this.guest = name;
  }
}
