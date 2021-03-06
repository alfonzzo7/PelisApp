import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  texto:string = "";

  constructor(private activatedRoute:ActivatedRoute,
              public _ms:MovieService) {
    this.activatedRoute.params
    .subscribe(params => {
      if(params['texto']){
          this.texto = params['texto'];
          this.buscarPeli();
      }else{
        _ms.peliculas = null;
      }
    });
  }

  ngOnInit() {
  }

  buscarPeli(){
    if(this.texto.length == 0){
      return;
    }
    this._ms.buscarPelicula(this.texto).subscribe();
  }

}
