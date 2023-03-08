import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { StudentComponent } from './student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobComponent } from './job.component';
import { NewjobComponent } from '../newjob/newjob.component';
// import {MatIconModule} from '@angular/material/icon';
// import { MatTableModule } from '@angular/material/table';
const route:Routes=[
  {path:"", component:JobComponent,},
  {path:"job", component:JobComponent}
  // { path:"job/new", component:NewjobComponent}
// children:[
//  { path:"job/new", component:NewjobComponent}
// ]
// }
]

@NgModule({
  declarations: [JobComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(route),
  ]
})
export class JobModule { }
