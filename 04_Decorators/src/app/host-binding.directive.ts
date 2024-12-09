import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]',
  standalone: true,
})
export class HighlightElementDirective implements OnInit{
  @HostBinding('style.backgroundColor') bgColor?: string;
  @HostBinding('style.color') textColor?: string;

  ngOnInit(): void {
    this.bgColor = '#f2aa4cff';
    this.textColor = '#101820ff';
  }
  
  @HostListener('click') onToggle(){
    if(this.bgColor === '#f2aa4cff'){
       this.bgColor = '#101820ff';
       this.textColor = '#f2aa4cff';
    }else{
       this.bgColor = '#f2aa4cff';
       this.textColor = '#101820ff';
    }
  }
}
