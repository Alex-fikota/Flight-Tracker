import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatiAeroporto } from './interface/dati-aeroporto';

@Injectable({
  providedIn: 'root'
})
export class DatiService {

  constructor(private http:HttpClient) { }

  getData(): Observable<DatiAeroporto[]>{
    return this.http.get<DatiAeroporto[]>('https://airlabs.co/api/v9/airports?api_key=3a24ee96-08e1-4955-a2f3-ca998b355ff6&country_code=TH');
  }

}
