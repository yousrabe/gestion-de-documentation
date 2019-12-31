import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MdocumentService} from "../Model/mdocument.service";
import {MdiskService} from "../Model/mdisk.service";

@Injectable({
  providedIn: 'root'
})
export class DiskService {


  constructor(private http:HttpClient) { }
  addDisk(d:MdiskService ) {
    return this.http.post('http://localhost:8082/disks/add',d)
  }
  updateDisk(d:MdiskService ) {
    return this.http.put('http://localhost:8082/disks/update',d)
  }
  removeDisk(idDisk)
  {
    return this.http.delete("http://localhost:8082/disks/remove?idDisk="+idDisk)
  }
  allDisk()
  {
    return this.http.get('http://localhost:8082/disks/all')
  }
}
