import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { DataDrivenFormComponent } from './components/data-driven-form/data-driven-form.component';
import { ErrorValidateComponent } from './components/error-validate/error-validate.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    DataDrivenFormComponent,
    ErrorValidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
