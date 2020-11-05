import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  dataUrl = 'http://localhost:5000/api/v1/message';

  constructor(private http:HttpClient) { }

  getMessages() : Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }

  public HandleError(e: any): void {
    // console.log(e);
    alert(e.error.error);
  }
}
