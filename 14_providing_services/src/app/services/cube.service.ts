import { Injectable } from '@angular/core';
import { PowerService } from './power.service';

@Injectable()
export class CubeService {

  constructor(public powerService: PowerService) { }

  calculateCube(value: number): number{
    return this.powerService.calculatePower(value, 3);
  }
}
