import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class DoorService {

  prod_server:string = "http://192.168.100.100" 

  constructor(private http: HttpClient) { }

  toggle(): Observable<any> {    
    return this.http.get<any>(
      `${this.prod_server}/api/toggle`
    );
  }
  panic(): Observable<any> {    
    return this.http.get<any>(
      `${this.prod_server}/api/panic`
    );
  }
  calibrate(): Observable<any> {    
    return this.http.get<any>(
      `${this.prod_server}/api/calibrate`
    );
  }

}
