import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnNumberComponent } from './btn-number/btn-number.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTrackerDirective } from './input-tracker.directive';
import { Start3Directive } from './start3.directive';
import { FGFactoryDirective } from './fgfactory.directive';


import { InHtmlDirective } from './in-html.directive';
import { MyInsightDirective } from './my-insight.directive';
import { AutoFormGroupDirective } from './auto-form-group.directive';
import { NgTwFormDirective } from './ng-tw-form.directive';
import { FormDataDirective } from './form-data.directive';
import { ApiKeysDirective } from './api-keys.directive';
import { ADirective } from './a.directive';
import { ApiGetDirective } from './api-get.directive';


@NgModule({
  declarations: [
    AppComponent,
    BtnNumberComponent,
    MyInsightDirective,
    //InputTrackerDirective,
    Start3Directive,
    AutoFormGroupDirective,
    NgTwFormDirective,
    FormDataDirective,
    ApiKeysDirective,
    ADirective,
    ApiGetDirective,
   // FGFactoryDirective,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
