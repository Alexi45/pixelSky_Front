import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { User } from '../clases/user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) {

   }

public update(id: number, user: User): Observable<any> {
    return this.httpClient.put<any>(`http://localhost:8080/api/update/${id}`, user);
  }


public login(user:User):Observable<any>{

  return this.httpClient.get(`http://localhost:8080/api/login/${user.name}/${user.password}`, {responseType:'text'})

}

getUserID(id: number): Observable<User>{
  return this.httpClient.get<User>(`http://localhost:8080/api/users/${id}`);
}


getUser(name: String): Observable<User>{
  return this.httpClient.get<User>(`http://localhost:8080/api/users/${name}`);
}

public delete(id: number): Observable<any> {
  return this.httpClient.delete<any>(`http://localhost:8080/api/delete/${id}`);
}

public save(user:User):Observable<any>{

  return this.httpClient.post(`http://localhost:8080/api/save`, user, {responseType:'text'})

}

public lista(): Observable<User[]> {
  return this.httpClient.get<User[]>(`http://localhost:8080/api/lista`);
}


}
