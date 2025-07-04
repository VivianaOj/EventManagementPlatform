// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list';
import { EventFormComponent } from './components/event-form/event-form';

export const routes: Routes = [
  { path: 'list', component: EventListComponent },
  { path: 'create', component: EventFormComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '**',  redirectTo: 'list' }
];
