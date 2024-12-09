import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroPipesComponent } from './intro-pipes/intro-pipes.component';
import { SlicePipeComponent } from './slice-pipe/slice-pipe.component';
import { NumberPipeComponent } from './number-pipe/number-pipe.component';
import { JsonPipeComponent } from './json-pipe/json-pipe.component';
import { AppendTextPipe } from './append-text.pipe';
import { SortNumbersPipe } from './sort-numbers.pipe';
import { CommonModule } from '@angular/common';
import { LetterCountPipe } from './letter-count.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,IntroPipesComponent,SlicePipeComponent, 
            NumberPipeComponent, JsonPipeComponent,AppendTextPipe,
            SortNumbersPipe,CommonModule,LetterCountPipe,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '05_pipes';

  stringVal:string = '';

  numbers = [3, 5, 1, 4, 2];
  sortOrder = 'asc';
  showList: boolean = false;

  get sortedNumbers(){
    const sortedArr = [...this.numbers].sort((a,b) => {
      if(this.sortOrder === 'asc'){
        return a - b;
      }else{
        return b - a;
      }
    });
    return sortedArr;
  }

  showSorting(){
    this.showList = true;
  }
}
