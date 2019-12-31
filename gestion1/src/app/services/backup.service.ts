import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {MbackupService} from "../Model/mbackup.service";

@Injectable({
  providedIn: 'root'
})
export class BackupService {

  constructor( private http:HttpClient) { }

  addBackup(d:MbackupService) {
    return this.http.post('http://localhost:8082/backups/add',d)
  }
  updateBackup(d:MbackupService ) {
    return this.http.put('http://localhost:8082/backups/update',d)
  }
  removeBackup(idBackup)
  {
    return this.http.delete("http://localhost:8082/backups/remove?idBackup="+idBackup)
  }

  allBackup()
  {
    return this.http.get('http://localhost:8082/backups/all')
  }


}
