import { InjectionToken } from "@angular/core";
import { TokenService1Service } from "../services/token-service-1.service";

export const LOG_MSG1 = new InjectionToken<TokenService1Service>('');

export const LOG_MSG2 = new InjectionToken<string>('Greeting');