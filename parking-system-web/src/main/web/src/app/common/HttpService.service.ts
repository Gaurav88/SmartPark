import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn:"root",
})

export class HttpService{
    constructor(private http: HttpClient){

    }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    post(path:string,params:any):Observable<any>{
        return this.http.post(path,params,this.httpOptions);
    }

    get(path):Observable<any>{
        return this.http.get(path);
    }

}