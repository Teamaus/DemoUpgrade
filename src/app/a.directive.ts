import { Directive } from '@angular/core';

@Directive({
  selector: 'form-data[A]'
})
export class ADirective {

  constructor() { 
    console.log("AD")
  }

}
