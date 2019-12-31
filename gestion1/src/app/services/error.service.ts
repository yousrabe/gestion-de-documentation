import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MdocumentService} from "../Model/mdocument.service";
import {MerrorService} from "../Model/merror.service";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {


  constructor(private http:HttpClient) { }
  addErrort(d:MerrorService ) {
    return this.http.post('http://localhost:8082/errors/add',d)
  }
  updateError(d:MerrorService  ) {
    return this.http.put('http://localhost:8082/errors/update',d)
  }
  removeError(idError)
  {
    return this.http.delete("http://localhost:8082/errors/remove?idError="+idError)
  }
  allError()
  {
    return this.http.get('http://localhost:8082/errors/all')
  }
}
