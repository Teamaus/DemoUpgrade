import { InjectionToken } from "@angular/core";
import { FormGroup } from "@angular/forms";
export const FORM_SERVICE = new InjectionToken<IFormService>("FORM_SERVICE")
export interface IFormService {
	createForm(data:any,formGroup:FormGroup):FormGroup

	
}
