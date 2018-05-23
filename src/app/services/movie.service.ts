import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {

  private apikey:string = "0a3c1bec5d3b022bfa93c7633ca60ed6";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor(private jsonp:Jsonp) {}

  getCartelera(fechaini:string, fechafin:string){
    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${fechaini}&primary_release_date.lte=${fechafin}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
               .map((res:any) => {
                 return res.json().results;
               });
  }

  getPopulares(){
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
               .map((res:any) => {
                 return res.json().results;
               });
  }

  getPopularesKids(){
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
               .map((res:any) => {
                 return res.json().results;
               });
  }

  buscarPelicula(texto:string){
    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
               .map((res:any) => {
                 return res.json().results;
               });
  }

}
