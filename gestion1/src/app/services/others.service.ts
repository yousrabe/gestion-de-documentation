import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MdocumentService} from "../Model/mdocument.service";
import {MothersService} from "../Model/mothers.service";

@Injectable({
  providedIn: 'root'
})
export class OthersService {


  constructor(private http:HttpClient) { }
  addOthers(d:MothersService ) {
    return this.http.post('http://localhost:8082/others/add',d)
  }
  updateOthers(d:MothersService ) {
    return this.http.put('http://localhost:8082/others/update',d)
  }
  removeOthers(idOthers)
  {
    return this.http.delete("http://localhost:8082/others/remove?idOthers="+idOthers)
  }
  allOthers()
  {
    return this.http.get('http://localhost:8082/others/all')
  }
}
