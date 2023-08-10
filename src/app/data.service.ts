import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http:HttpClient) { }
  
  login(data:any):Observable<any>{
    return this.http.post("http://hmaapi.kilobytetech.com/auth/login", data)
  }
  userData(pageNo: number, size: number):Observable<any>{
    const url=`http://hmaapi.kilobytetech.com/users?pageNo=${pageNo}&size=${size}`
    return this.http.get(url);
  }

  userDataFake():Observable<any>{
    return this.http.get("https://reqres.in/api/users?page=2")
  }
}
