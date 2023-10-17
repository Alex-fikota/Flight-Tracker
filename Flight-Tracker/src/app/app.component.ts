import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatiService } from './dati.service';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apiData';
  newData=any;
  constructor(private _datiService:DatiService) {
    } 
   
    ngOnInit(){
      this._datiService.getFlightSpecific().subscribe(res=>{
        this._datiService=res;
      })
    }
}
