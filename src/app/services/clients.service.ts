import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { Client,Persona } from './../model/client'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private API_URL: string;

  constructor(private http: HttpClient) {
    this.API_URL = `${environment.UrlApi}`;
  }

  public getClients(): Observable<Client>{
    return this.http.get<Client>(this.API_URL);
  }

}
