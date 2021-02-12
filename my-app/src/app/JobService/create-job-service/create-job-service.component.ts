import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JobData } from './JobData';
import { JobService } from './JobService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-job-service',
  templateUrl: './create-job-service.component.html',
  styleUrls: ['./create-job-service.component.css']
})
export class CreateJobServiceComponent implements OnInit {
  outputData: JobData[];
  FID: string;

  constructor(private jobService: JobService, private window: Window) {
    var that = this;
    window.parent["$NWP"].features.getSelected().then(function (feature) {
      that.FID = feature.properties.G3E_FID;
      that.jobService.sendGetRequest(that.FID).subscribe((data: any[]) => {
        that.outputData = data;
        console.log('Length of data - ' + that.outputData.length);
      })
    });
    setTimeout(function(){
         console.log(that.outputData.length);
    },4000);
  }
  
  rowClicked(instance:JobData){
    console.log(instance.FID);
    console.log(instance.FNO);
    window.parent["$NWP"].features.fetchGTechFeatures({G3E_FNO:instance.FNO,G3E_FID:instance.FID}).then(function(result){
      window.parent["$NWP"].features.highlight(result.data,true);
    })
  }
  
  onSave(){
    window.location.reload();
  }
  ngOnInit(): void {
  }
}
