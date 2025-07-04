import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { EventListComponent } from './app/components/event-list/event-list';
import { EventFormComponent } from './app/components/event-form/event-form';

export const routes: Routes = [
  { path: 'list', component: EventListComponent },
  { path: 'create', component: EventFormComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
});