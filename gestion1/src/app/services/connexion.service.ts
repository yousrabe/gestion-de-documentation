import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MdocumentService} from "../Model/mdocument.service";
import {MconnexionService} from "../Model/mconnexion.service";

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {


  constructor(private http:HttpClient) { }
  addConnexion(d:MconnexionService ) {
    return this.http.post('http://localhost:8082/connexions/add',d)
  }
  updateConnexion(d:MconnexionService ) {
    return this.http.put('http://localhost:8082/connexions/update',d)
  }
  removeConnexion(idConn)
  {
    return this.http.delete("http://localhost:8082/connexions/remove?idConn="+idConn)
  }
  allConnexion()
  {
    return this.http.get('http://localhost:8082/connexions/all')
  }
}
