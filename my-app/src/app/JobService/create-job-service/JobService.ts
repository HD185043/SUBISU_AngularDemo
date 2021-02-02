import { Injectable } from '@angular/core';
import { JobData } from './JobData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})


export class JobService {

  constructor(private httpClient: HttpClient) { }
  FID: string;

  private REST_API_SERVER = "http://localhost/CreateJobService/Service1.svc/GetONUs?sourceFID=";

  public sendGetRequest(pFID: string) {
    this.FID = pFID;
    return this.httpClient.get(this.REST_API_SERVER+this.FID);
  }
}