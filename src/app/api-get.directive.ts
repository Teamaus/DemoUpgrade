import { Directive, InjectionToken, Injector, ReflectiveInjector, SkipSelf, forwardRef } from '@angular/core';
export const API_GET = new InjectionToken("API_GET")
@Directive({
  selector: 'api-get',
  providers:[{provide:API_GET,useExisting:forwardRef(()=>ApiGetDirective)}]
})
export class ApiGetDirective {

  constructor() { 
    

  }

}
