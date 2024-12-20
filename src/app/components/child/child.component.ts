import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html'
})
export class ChildComponent {
  @Input('childColor') childColorProps!: string
  @Input() name!: string
  @Output() nameChange = new EventEmitter<string>();

  constructor() {
  }
  changeName() {
    this.nameChange.emit('Дочерний эл-т')
  }
}
