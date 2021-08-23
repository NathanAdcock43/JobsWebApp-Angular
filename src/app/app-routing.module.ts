import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobFormComponent } from './job-form/job-form.component';
import { JobListComponent } from './job-list/job-list.component';

//These routes are the locations of the Jobs list and Jobs Forms which will
//viewable on the index page
const routes: Routes = [
  { path: 'jobs', component: JobListComponent },
  { path: 'jobs/create', component: JobFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
