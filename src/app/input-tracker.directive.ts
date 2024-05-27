import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: 'input'
})
export class InputTrackerDirective implements OnInit {

  constructor() { }
  ngOnInit(): void {
    console.log("INPUT ===>>")
  }

}
