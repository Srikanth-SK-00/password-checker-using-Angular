import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassService {

  constructor(private http:HttpClient) { }

  getrooms()
  {
    return this.http.get('http://localhost:3000/genrate');
  }
}
