import { TokenType } from '@angular/compiler';
import { Component, Inject } from '@angular/core';
import { TokenService1Service } from './services/token-service-1.service';
import { UseFactoryPropertyService } from './services/use-factory-property.service';
import { UpdateConfigService } from './services/update-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  // constructor(
  //   @Inject("MSGLOG1") private token: TokenService1Service){
  //    this.token.log();
  // }

  //constructor(@Inject("MSGLOG1") public msg: string){}
  
  message:string | undefined;
  constructor(
               private alert:TokenService1Service,
               private msg:UseFactoryPropertyService,
               private appUpdateService:UpdateConfigService,
               @Inject('GREETING_MESSAGE_FACTORY')
               public factoryMessage: string,
               @Inject('GREETING_MESSAGE_VALUE')
               public valueMessage:string
              ){
    console.log(this.msg.msg());

    this.message = this.appUpdateService.getAppupdate();

    console.log("useFactory Message : ",factoryMessage);
    console.log("useValue Message : ",valueMessage);
  };

  Showalert(){
    this.alert.showAlert();
  }


}
