import { Directive } from '@angular/core';

@Directive({
  selector: 'input'
})
export class MyInsightDirective {

  constructor() { 
    console.log("MY INSIGHT ")
  }

}
