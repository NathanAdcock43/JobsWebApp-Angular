import { Component, OnInit } from '@angular/core';
import { Job } from '../model/job';
import { JobServiceService } from '../service/job-service.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs: Job[];

  constructor(private jobService: JobServiceService) { 

  }

  ngOnInit(): void {
    this.jobService.findAll().subscribe(data =>{
      this.jobs = data;
    });
  }

}
