import { Directive, Inject, Input } from '@angular/core';
import { DATA_SERVICE, IDataService } from './idata-service';
import { FormGroup } from '@angular/forms';
import { FORM_SERVICE, IFormService } from './iform-service';

@Directive({
  selector: '[ng-tw-form]'
})
export class NgTwFormDirective {
  @Input() formGroup? :FormGroup
  constructor(@Inject(DATA_SERVICE)private dataService:IDataService,
@Inject(FORM_SERVICE)private formService:IFormService) { }
  ngOnInit(){
    this.dataService.getData$()
    .subscribe(data=>{
        if (this.formGroup)
          this.formService.createForm(data,this.formGroup)
      }
    )
  }

}
