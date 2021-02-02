import { Component } from '@angular/core';
import {CreateJobServiceComponent} from './JobService/create-job-service/create-job-service.component';

@Component({
  selector: 'app-root',
  template: `<app-create-job-service></app-create-job-service>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
