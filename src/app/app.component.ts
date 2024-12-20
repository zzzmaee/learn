import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CutTextPipe} from "./pipes/cut-text.pipe";
import {ChildComponent} from "./components/child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CutTextPipe, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  color = 'brown'
  name: string = 'hello, world'

  changeColor(newColor: string) {
    this.color = newColor
  }

  checkValue(event: Event) {
    const target = event.target as HTMLInputElement
    console.log('e', target.value)
  }

  setNewName(newName: string) {
    this.name = newName
  }
}
