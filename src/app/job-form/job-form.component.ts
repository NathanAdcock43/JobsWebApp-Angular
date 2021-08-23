import { Component, OnInit } from '@angular/core';
import { Job } from '../model/job';
import { JobServiceService } from '../service/job-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {

  job: Job;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
      private jobService: JobServiceService) {
  
        this.job = new Job();
}
  ngOnInit(): void {
    
  }

onSubmit(){
  this.jobService.save(this.job).subscribe(
    result => this.gotoJobList()
  );
}

gotoJobList() {
  this.router.navigate(['/jobs']);
}

}
