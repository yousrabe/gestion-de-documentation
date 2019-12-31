import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MdocumentService} from "../Model/mdocument.service";

@Injectable({
  providedIn: 'root'
})
export class MysqlService {


  constructor(private http:HttpClient) { }
  addMysql(d:MysqlService ) {
    return this.http.post('http://localhost:8082/mysql/add',d)
  }
  updateMysql(d:MysqlService ) {
    return this.http.put('http://localhost:8082/mysql/update',d)
  }
  removeMysql(idMysql)
  {
    return this.http.delete("http://localhost:8082/mysql/remove?idMysql="+idMysql)
  }
  allMysql()
  {
    return this.http.get('http://localhost:8082/mysql/all')
  }
}
