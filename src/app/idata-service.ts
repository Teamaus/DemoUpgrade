import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export const DATA_SERVICE = new InjectionToken<IDataService>("DATA_SERVICE")
export interface IDataService {
	getData$():Observable<any>
}
