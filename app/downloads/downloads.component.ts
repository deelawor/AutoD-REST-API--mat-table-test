import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {
lastLog;
  constructor(private apiService: ApiService) { }
/**
 * subscribe the data (last downloads) to the variable 'lastlog'  
 */
  ngOnInit() {
    this.apiService.getDlog()
    .subscribe((data) => {
      console.log(data);
      this.lastLog = (data);
    });
  }

}
