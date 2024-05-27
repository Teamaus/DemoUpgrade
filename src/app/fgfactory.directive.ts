import { Directive, ElementRef, HostListener, Inject, InjectionToken, Injector, Input, Query, QueryList, ViewChildren, forwardRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export const FGFACTORY = new InjectionToken<any>("FGFACTORY")

export const SCREEN_COMPONENT_TOKEN = new InjectionToken<any>('DynamicComponentToken');
@Directive({
  selector: 'form',
  //Add formService Provider 
  providers:[{provide:FGFACTORY,useExisting:forwardRef(()=>FGFactoryDirective)}]
})
export class FGFactoryDirective {
  //Here we will inject the formService to build the data 
  fg?:FormGroup
  constructor(@Inject(SCREEN_COMPONENT_TOKEN)private comp:any /*inject here the formService*/) { 
    //Build the data with formService
    console.log("FGFACTORY")
    this.comp.frm = new FormGroup({
      name:new FormControl(),
      email:new FormControl(),
      num:new FormControl()
  })  
  this.fg = this.comp.frm 
  }
  

  @HostListener("submit",["$event"])
  submit(){
    console.log(this.comp.frm.value)
  }
}
