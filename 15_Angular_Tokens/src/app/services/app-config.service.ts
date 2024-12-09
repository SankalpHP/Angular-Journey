import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor() { }

  getAppConfig(){
    return {
      version:'1.0.0',
      enviroment:'production',
      appName:'my-app'
    }
  }
}
