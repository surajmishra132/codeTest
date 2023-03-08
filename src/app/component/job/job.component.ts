import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  constructor(private api:ApiService, private route: Router) { }

  ngOnInit(): void {
    this.getdata()
  }
availableJobs:any
  getdata(){
    return this.api.get("jobs").subscribe((res:any)=>{
      this.availableJobs=res
    })
  }
  createNewJob(){
this.route.navigate(["/job/new"])
  }

  EditJobInfo(id:number,job:any){
    let encId=encodeURIComponent(id)
    this.route.navigate(["/job/new/", encId],{ state: job})
    
  }
}
