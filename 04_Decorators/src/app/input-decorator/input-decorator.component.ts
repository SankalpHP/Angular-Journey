import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-input-decorator',
  standalone: true,
  imports: [],
  templateUrl: './input-decorator.component.html',
  styleUrl: './input-decorator.component.css'
})
export class InputDecoratorComponent {
  @Input() receiveMessage:string = '';

  title = "@Input decorator"
}
