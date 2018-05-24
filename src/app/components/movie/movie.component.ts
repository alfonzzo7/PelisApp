import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  pelicula:any;
  volver:string = "";
  busqueda:string = "";

  constructor(private activatedRoute:ActivatedRoute,
              public _ms:MovieService) {
                this.activatedRoute.params
                .subscribe(params => {
                  this.volver = params.pagina;
                  if(params.busqueda){
                    this.busqueda = params.busqueda;
                  }
                  this._ms.buscarPeliculaId(params.id)
                          .subscribe(pelicula => {
                            this.pelicula = pelicula;
                          })
                });
              }

  ngOnInit() {
  }

}
