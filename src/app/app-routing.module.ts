import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren:()=>import("./component/job/job.module").then(m=>m.JobModule)},

  {path:'job/new', loadChildren:()=>import("./component/newjob/newjob.module").then(m=>m.NewjobModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
