import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstandComponent } from './addstand/addstand.component';
import { EdithdeletestandComponent } from './edithdeletestand/edithdeletestand.component';
import { EventosComponent } from './eventos/eventos.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    AddstandComponent,
    EdithdeletestandComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [

//    {provide : LocationStrategy , useClass:HashLocationStrategy}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
