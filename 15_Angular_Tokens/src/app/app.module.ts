import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenService1Service } from './services/token-service-1.service';
import { TokenService2Service } from './services/token-service-2.service';
import { UseFactoryPropertyService } from './services/use-factory-property.service';
import { AppConfigService } from './services/app-config.service';
import { UpdateConfigService } from './services/update-config.service';

export function showGreetingMessage(){
  const currentHour = new Date().getHours();

  let greetingMessage = '';

  if(currentHour >= 0 && currentHour < 12){
     return greetingMessage = 'Good Morining';
  }else if(currentHour >= 12 && currentHour < 18){
     return greetingMessage = 'Good Afternoon';
  }else{
     return greetingMessage = 'Good Evening';
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // Dependency Injection By Using a Type Tokens
    // {provide:TokenService1Service,useClass:TokenService1Service},
    // {provide:TokenService2Service,useClass:TokenService2Service},

    // Dependency Injection By Using the String Tokens
    // {provide:"TokenService1",useClass:TokenService1Service},
    // {provide:"TokenService2",useClass:TokenService2Service},

    // Dependency Injection By Using the Injection Object Tokens
    // {provide:'MSGLOG1',useClass:TokenService1Service}

    // useValue property
    //{provide:'MSGLOG1',useValue:"This is the String Message from useValue Parameter"}
     
    // useExisting property
    TokenService1Service,
    {
      provide:TokenService2Service,
      useExisting:TokenService2Service
    },

    // useFactory property
    UseFactoryPropertyService,
    {
      provide:UseFactoryPropertyService,
      useFactory: () =>{
        return new UseFactoryPropertyService();
      }
    },

    // deps property inside a useFactory property
    AppConfigService,
    {
      provide:UpdateConfigService,
      useFactory:(configService:AppConfigService) =>{
         const config = configService.getAppConfig();
         return new UpdateConfigService(config);
      },
      deps:[AppConfigService],
    },

    // difference between useFactory and useValue
    {
      provide:"GREETING_MESSAGE_FACTORY",
      useFactory:showGreetingMessage,
    },
    {
      provide:'GREETING_MESSAGE_VALUE',
      useValue:"Hello"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
