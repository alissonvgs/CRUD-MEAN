import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FuncAddComponent} from './func-add/func-add.component';
import {FuncEditComponent} from './func-edit/func-edit.component';
import {FuncGetComponent} from './func-get/func-get.component';


@NgModule({
  declarations: [
    AppComponent,
    FuncAddComponent,
    FuncEditComponent,
    FuncGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    SlimLoadingBarModule.forRoot()
  ],
  exports: [BrowserModule, SlimLoadingBarModule, AngularFontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
