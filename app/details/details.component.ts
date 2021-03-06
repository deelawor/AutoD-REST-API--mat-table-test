import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DetailPara } from '../detail-para';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
params;
details;


  constructor(private apiService: ApiService) { }
  columns = ["ID","FileType","From_bsp","CountryCode","RenameInfo_Mask","Rename_Format","File_path","Backup_Path",
  "UnzipFile","ImportFile","Status","Download_Fr_Folder","Classify_File","Backup_File"];
  index = ["id","fileType","file_from_bsp","country_code","renameinfo_mask","rename_format","file_path","file_backup_path",
    "unzip_file","import_file","status","download_fr_folder","classify_file","backup_file"];
  
  detailPara : DetailPara[] = [];
  
    ngOnInit() {
      this.apiService.getParams()
      .subscribe((data) => {
        console.log(data);
        this.params = (data);
      });
    }
  
    paramDetail(id) {
      this.apiService.getDetailPara(id)
      .subscribe((response) => {
        console.log(response);
        this.detailPara= (response);
      });
    }
  
}
