import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MdocumentService} from "../Model/mdocument.service";
import {MinformixService} from "../Model/minformix.service";

@Injectable({
  providedIn: 'root'
})
export class InformixService {


  constructor(private http:HttpClient) { }
  addInformix(d:MinformixService ) {
    return this.http.post('http://localhost:8082/informix/add',d)
  }
  updateInformix(d:MdocumentService ) {
    return this.http.put('http://localhost:8082/informix/update',d)
  }
  removeInformix(idInfo)
  {
    return this.http.delete("http://localhost:8082/informix/remove?idInfo="+idInfo)
  }
  allInformix()
  {
    return this.http.get('http://localhost:8082/informix/all')
  }
}
