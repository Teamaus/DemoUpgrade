import { Directive } from '@angular/core';
import { FormDataDirective } from './form-data.directive';

@Directive({
  selector: '[api-keys]'
})
export class ApiKeysDirective {

  constructor(private formData:FormDataDirective) {

      console.log("FORMDATA DIRECTIVE", formData)
   }

}
