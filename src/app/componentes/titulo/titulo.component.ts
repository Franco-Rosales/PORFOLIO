import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  miPorfolio:any;
  constructor(private datosPorfolio: DatosService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos();
  }

}
