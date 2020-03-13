import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo'
const API = 'http://localhost:3000'

@Injectable({
  providedIn:'root'
})
export class photoService {
  constructor(public  http:HttpClient){
  }
  listFromUser(useName: string){
    return  this.http.get<Photo[]>(API+'/'+useName+'/photos')
  }

}
