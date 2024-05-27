import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'map-for-instance'
})
export class InHtmlDirective {

  constructor(private elem:ElementRef) { }
  ngAfterViewInit(){
      this.elem.nativeElement.innerHTML+="<div id='mapview'>Map Container</div>"
      
      

  }

}
