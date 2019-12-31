import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {MchangeService} from "../Model/mchange.service";

@Injectable({
  providedIn: 'root'
})
export class ChangeService {

  constructor(private http:HttpClient) { }
  addChange(d:MchangeService ) {
    return this.http.post('http://localhost:8082/changes/add',d)
  }
  updateChange(d:MchangeService ) {
    return this.http.put('http://localhost:8082/changes/update',d)
  }
  removeChange(idChange)
  {
    return this.http.delete("http://localhost:8082/changes/remove?idChange="+idChange)
  }

  allChange()
  {
    return this.http.get('http://localhost:8082/changes/all')
  }

}
