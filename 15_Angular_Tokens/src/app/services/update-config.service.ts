import { Inject, Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateConfigService {

  constructor(
    @Inject('APP_UPDATE')
    private config:any) { }

  getAppupdate(){
    const version = this.config.version;
    const enviroment = this.config.enviroment;
    const appName = this.config.appName;

    return `Welcome to ${appName}, v${version}, (${enviroment} enviroment)!`;
  }
}
