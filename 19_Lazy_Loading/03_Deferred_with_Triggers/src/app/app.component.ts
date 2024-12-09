import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TriggersComponent } from './triggers/triggers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TriggersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '03_Deferred_with_Triggers';
}
