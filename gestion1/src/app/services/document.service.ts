import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MdocumentService} from "../Model/mdocument.service";


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http:HttpClient) { }

  addDocument(d:MdocumentService ) {
    return this.http.post('http://localhost:8082/documents/adddo',d)
  }
  updateDocument(d:MdocumentService )
  {
    return this.http.put('http://localhost:8082/documents/update',d)
  }
  removeDocument(idD)
  {
    return this.http.delete("http://localhost:8082/documents/remove?idD="+idD)
  }
  allDocument()
  {
    return this.http.get('http://localhost:8082/documents/all')
  }
}
