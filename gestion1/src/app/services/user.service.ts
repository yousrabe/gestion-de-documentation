import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MuserService} from "../Model/muser.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  /*login(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8082/'+ 'token/generate-token', loginPayload).pipe(
      catchError(val => of(val)));
  }*/

  addUser(u:MuserService ) {
    return this.http.post('http://localhost:8082/users/add',u)
  }
  updateClient(u:MuserService ) {
    return this.http.put('http://localhost:8082/users/update',u)
  }
  removeClient(id) {
    return this.http.delete('http://localhost:8082/users/delete '+id)
  }
  allUsers()
  {
    return this.http.get('http//localhost:8082/users/all')
  }
  findEm(email)
  {
    return this.http.get('http//localhost:8082/users/getemail'+email)
  }
}
