import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatiService {

  constructor(private http:HttpClient) { }

  getFlightSpecific(){
    return this.http.get("https://airlabs.co/api/v9/flights?api_key=3a24ee96-08e1-4955-a2f3-ca998b355ff6&_fields=lat,lng,dir,alt,flag,airline_iata,aircraft_icao")
  }

}
