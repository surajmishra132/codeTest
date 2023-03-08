import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { window, filter } from 'rxjs';

import { ApiService } from 'src/app/api.service';
import { Job } from 'src/app/job';

@Component({
  selector: 'app-newjob',
  templateUrl: './newjob.component.html',
  styleUrls: ['./newjob.component.scss']
})
export class NewjobComponent implements OnInit {

  constructor( private api: ApiService, private _Activatedroute:ActivatedRoute, private route: Router) { 
    // console.log(route.url.split("job/new/")[1])
 
  }

  ngOnInit(): void {
   
    this.patchValueCreateForm(history.state)

 
  }

isEditPageOpen:boolean=false
  CreateForm=new FormGroup({
    id:new FormControl(),
    job_number:new FormControl(),
    job_title:new FormControl(),
    job_start_date:new FormControl(),
    job_close_date:new FormControl(),
    experience_required:new FormControl(),
    number_of_openings:new FormControl(),
    job_notes:new FormControl(),
    
  })

  createNewJob(){
    if(this.isEditPageOpen){
      let id= this.route.url.split("job/new/")[1]
      this.api.put(`jobs/${id}`, this.CreateForm.value).subscribe((res:any)=>{
    
        this.route.navigate(["/job"])
      })
    }
this.api.post("jobs", this.CreateForm.value).subscribe((res:Job[])=>{
  this.route.navigate(["/job"])
})
  }

  patchValueCreateForm(val:Job){
    if(val["id"]){
      this.isEditPageOpen=true
      this.CreateForm.patchValue(val)
    }
    else{
     let id= this.route.url.split("job/new/")[1]
     if(id){
      this.isEditPageOpen=true
      this.api.get(`jobs/${id}`).subscribe((res:any)=>{
        this.CreateForm.patchValue(res)
       })
     }
    
    }

  }
}
