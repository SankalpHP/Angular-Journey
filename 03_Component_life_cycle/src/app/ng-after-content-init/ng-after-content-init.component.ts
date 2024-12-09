import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-after-content-init',
  standalone: true,
  imports: [],
  templateUrl: './ng-after-content-init.component.html',
  styleUrl: './ng-after-content-init.component.css'
})
export class NgAfterContentInitComponent implements AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
  
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit hook was invoked...");
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    console.log('ngAfterContentInit - ', 'contentWrapper', this.content);
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked hook was invoked...");
  }

  ngAfterViewInit(): void {
    const divElement:HTMLElement = this.wrapper.nativeElement;
    divElement.style.color = "goldenrod";
    divElement.style.fontSize = "15px";
    divElement.style.fontWeight = "300";

    console.log("ngAfterViewInit hook was invoked...", this.wrapper);
  }
  
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked hook was invoked...");
  }
  
}
