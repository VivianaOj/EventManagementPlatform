import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { EventListComponent } from './components/event-list/event-list';
import { EventFormComponent } from './components/event-form/event-form';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AppComponent,
    EventListComponent,
    EventFormComponent
   ],
 })
export class AppModule {}