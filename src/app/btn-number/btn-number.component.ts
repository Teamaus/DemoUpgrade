import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'btn-number',
  templateUrl: './btn-number.component.html',
  styleUrls: ['./btn-number.component.css'],
  providers:[{provide:NG_VALUE_ACCESSOR,useExisting:forwardRef(() => BtnNumberComponent),multi:true,}]
})
export class BtnNumberComponent implements OnInit,ControlValueAccessor{

Dec() {
  this.number-- 
  this._onChange(this.number)
}
Inc() {
  this.number++
  this._onChange(this.number)
}
InitNumber() {
  this.start = true 
  this.number = Math.round(Math.random()*100)
  this._onChange(this.number)
}
  number = 0
  start = false
 

  constructor(





    
  ) { }
  //#region
  _onChange = (value:any)=>{}
  _onTouch = (value:any)=>{}
  isDisabled = false
  writeValue(obj: any): void {
   this.number = obj
   
  }
  registerOnChange(fn: any): void {
    this._onChange = fn
  }
  registerOnTouched(fn: any): void {
    this._onTouch = fn
  }
  setDisabledState(isDisabled: boolean): void {
      this.isDisabled = isDisabled
      
  }
  //#endregion
  ngOnInit(): void {
  }

}
