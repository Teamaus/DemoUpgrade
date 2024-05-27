import { Directive, Inject } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { FGFACTORY, FGFactoryDirective } from './fgfactory.directive';

@Directive({
  selector: '[autoFormGroup]'
})
export class AutoFormGroupDirective {
    formGroup = new FormGroup({})
    constructor(@Inject(FGFACTORY) private formGroupDirective: FGFactoryDirective) { }
  ngOnInit(){
   
    // Set the newly created FormGroup to the formGroup directive
    this.formGroupDirective.fg = this.formGroup; 
  }
}
