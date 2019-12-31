import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MdocumentService} from "../Model/mdocument.service";
import {MjobService} from "../Model/mjob.service";

@Injectable({
  providedIn: 'root'
})
export class JobService {


  constructor(private http:HttpClient) { }
  addJob(d:MjobService ) {
    return this.http.post('http://localhost:8082/jobs/add',d)
  }
  updateJob(d:MjobService ) {
    return this.http.put('http://localhost:8082/jobs/update',d)
  }
  removeJob(idJob)
  {
    return this.http.delete("http://localhost:8082/jobs/remove?idBackup="+idJob)
  }
  allJob()
  {
    return this.http.get('http://localhost:8082/jobs/all')
  }
}
