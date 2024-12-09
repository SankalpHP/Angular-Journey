import { Component } from '@angular/core';
import { CubeService } from '../services/cube.service';
import { PowerService } from '../services/power.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
  providers: [CubeService, PowerService],
})
export class MyComponentComponent {
  constructor(public cubeService: CubeService){}

  calculateCube(): number{
    return this.cubeService.calculateCube(5);
  }
}
