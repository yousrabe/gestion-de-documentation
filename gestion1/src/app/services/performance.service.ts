import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {MperformanceService} from "../Model/mperformance.service";

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {


  constructor(private http:HttpClient) { }
  addPerformance(d:MperformanceService ) {
    return this.http.post('http://localhost:8082/performances/add',d)
  }
  updatePerformance(d:MperformanceService ) {
    return this.http.put('http://localhost:8082/performances/update',d)
  }
  removePerformance(idPerfo)
  {
    return this.http.delete("http://localhost:8082/performances/remove?idPerfo="+idPerfo)
  }
  allPerformance()
  {
    return this.http.get('http://localhost:8082/performances/all')
  }
}
