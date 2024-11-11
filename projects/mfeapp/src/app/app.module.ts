import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TodolistComponent } from './todolist/todolist.component';
import { TodolistModule } from './todolist/todolist.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodolistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
