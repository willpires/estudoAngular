import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class FotoService {
  Api = 'http://localhost:3000/flavio/photos';

  constructor(private http: HttpClient){

  }
  listFromUser(useName: string){
    return this.http.get<Object[]>(this.Api)

  }

}
