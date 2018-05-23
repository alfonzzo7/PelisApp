import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  fechaInicio:string = "";
  fechaFin:string = "";

  cartelera:any[] = [];

  constructor(public _ms:MovieService,
              private datePipe:DatePipe) {}

  ngOnInit() {
    this.obtenerFechasCartelera();
    this._ms.getCartelera(this.fechaInicio, this.fechaFin).subscribe(data => {
      this.cartelera = data;
      console.log(this.cartelera);
    });
  }

  obtenerFechasCartelera() {
    let fecha = new Date();
    this.fechaInicio = this.datePipe.transform(fecha, 'yyyy-MM-dd');
    fecha.setMonth(fecha.getMonth() + 2);
    this.fechaFin = this.datePipe.transform(fecha, 'yyyy-MM-dd');
  }

}
