import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-atttibute-directives',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './atttibute-directives.component.html',
  styleUrl: './atttibute-directives.component.css'
})
export class AtttibuteDirectivesComponent {
  title:string = 'Attribute Directives [[ngStyle]="{style: expression}"] and [ngClass]="{cssClass: expression}"';

  title_class = 'Attribute Directives [ngClass]="{cssClass: expression}"';
  expression  = true;
  userInput = '';

  title_style:string = 'Attribute Directives [[ngStyle]="{style: expression}"]"';
  
  mode = 'lightMode';
  colorMode(){
    if(this.mode == "lightMode"){
      this.mode = "darkMode"
    }else{
      this.mode = "lightMode"
    } 
  }
  
  stylemode:object = {
                'background-color': 'azure',
               }
  colorStyle(){

    if(Object.keys(this.stylemode).length == 1){
      this.stylemode = {
        'background-color': 'black',
        'color': 'white'
       };
    }else{
       this.stylemode = {
        'background-color': 'azure',
       } 
  }
}

nm : string = '';
em : string = '';
emailIsValid : boolean = false;
formSubmitted : boolean = false;

checkEmailValidation(em : string): void{
  if(em.includes('@') && em.includes('.com')){
    this.emailIsValid = true;
  }else{
    this.emailIsValid = false;
  }
}
showMessage(){
  if(this.nm && this.emailIsValid){
    this.formSubmitted = true;
  }else{
    this.formSubmitted = false;
  }
}

}

