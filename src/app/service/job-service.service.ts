import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../model/job';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  private jobsUrl: string;
  private newJobUrl: string;

  constructor(private http: HttpClient) {
    this.jobsUrl = 'http://localhost:8089/jobs';
    this.newJobUrl = 'http://localhost:8089/jobs/create';
  }

  public findAll(): Observable<Job[]> {
    return this.http.get<Job[]>(this.jobsUrl);
  }

  public save(job: Job) {
    return this.http.post<Job>(this.newJobUrl, job);
  }
}