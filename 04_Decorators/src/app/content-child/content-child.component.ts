import { style } from '@angular/animations';
import { AfterContentInit, Component, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-content-child',
  standalone: true,
  imports: [],
  templateUrl: './content-child.component.html',
  styleUrl: './content-child.component.css'
})
export class ContentChildComponent implements AfterContentInit{
  @ContentChild('textRef') text?:ElementRef;

  ngAfterContentInit(): void {
    const content = this.text?.nativeElement;
    content.style.fontStyle = 'Italic';
    content.style.color = '#afeeee';
    content.style.fontWeight = '350';
    content.style.backgroundColor = 'black';
    console.log(this.text);
  }
}
