import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list';
import { EventFormComponent } from './components/event-form/event-form';


export const routes: Routes = [
  { path: 'list', component: EventListComponent },
  { path: 'create', component: EventFormComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

