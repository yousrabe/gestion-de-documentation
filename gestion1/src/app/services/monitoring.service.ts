import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MdocumentService} from "../Model/mdocument.service";
import {MmonitoringService} from "../Model/mmonitoring.service";

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {


  constructor(private http:HttpClient) { }
  addMonitoring(d:MmonitoringService ) {
    return this.http.post('http://localhost:8082/monitoring/add',d)
  }
  updateMonitoring(d:MmonitoringService ) {
    return this.http.put('http://localhost:8082/monitoring/update',d)
  }
  removeMonitoring(idMoni)
  {
    return this.http.delete("http://localhost:8082/monitoring/remove?idMoni="+idMoni)
  }
  allMonitoring()
  {
    return this.http.get('http://localhost:8082/monitoring/all')
  }
}
