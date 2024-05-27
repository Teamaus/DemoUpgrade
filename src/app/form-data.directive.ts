import { Directive, Input } from '@angular/core';
/*
function createSeviceData(serviceDataFactory:IServiceDataFactory){

}*/
@Directive({
  selector: 'form-data',
 
  
})
export class FormDataDirective {
  @Input("api-keys") apiKeys:any
  constructor() { 

  }

}
