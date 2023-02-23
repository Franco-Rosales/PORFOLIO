import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    //permite acceder a los recursos del servidor GET
    return this.http.get('json');

  }
}
