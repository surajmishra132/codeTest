import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,
    private router: Router,) { }
    private apiUrl: string = "http://localhost:3000/"
  get(url:string): any {
    return this.http.get(this.apiUrl + url);
  }

  deleteFile(url:string, data:any): any {
    return this.http.post(this.apiUrl + url, data);
  }

  delete(url:string): any {
    return this.http.delete(this.apiUrl + url);
  }

  post(url:string, data:any): any {
    return this.http.post(this.apiUrl + url, data);
  }
  put(url:string, data:any): any {
    return this.http.put(this.apiUrl + url, data);
  }
}
