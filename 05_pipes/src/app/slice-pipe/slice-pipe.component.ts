import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slice-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slice-pipe.component.html',
  styleUrl: './slice-pipe.component.css'
})
export class SlicePipeComponent {
   
  title="More About the Slice Pipes."
  str = "Angular slice pipe"
  arr = ["Item A","Item B","Item C","Item D"];
}
