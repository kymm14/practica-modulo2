import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exameninterfaces } from '../interfaces/exameninterfaces';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }
  
}
@Injectable({
  providedIn: 'root'
})
export class ExamenservicesService {

  uri: string = "https://practica-modulo2-186b4-default-rtdb.europe-west1.firebasedatabase.app/equipo.json";
  datos: Exameninterfaces[] = [];
  isLoading = true;

  constructor( private http: HttpClient ) {
    http
      .get(this.uri)
      .subscribe((respuesta)=> {
        this.datos.push(respuesta);
        this.isLoading = false;
        console.log(this.datos);
      })
   }
}
