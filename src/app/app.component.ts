import { Component } from '@angular/core';
import { ExamenservicesService } from './services/examenservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica-modulo2';

constructor( public _db: ExamenservicesService) {
  console.log(_db.datos);
  
}

}
