import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Directive({
  selector: 'btn-number button[type="button"]'
})
export class Start3Directive {
  count = 0 
  obs$?:Observable<any>
  constructor(private elem:ElementRef) { 
      console.log("In here ",elem.nativeElement.outerHTML)
    
  }
 
  onClick(event:any){
    console.log("CLICK")
    
    this.count++
    
    if (this.count==3){
      event.target.disabled = true
    }
  }
  ngAfterViewInit(){
    console.log("SUBSCRIBE MY BUTTON")
    console.log(this.elem.nativeElement.innerText)
    if (this.elem.nativeElement.innerText=="Press Start To get initial Number"){
       
        fromEvent(this.elem.nativeElement,"click")
        .subscribe(
          event=>this.onClick(event)
        )
    }
  }
  
  

}

