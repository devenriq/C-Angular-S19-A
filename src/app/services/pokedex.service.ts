import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  urlBase = 'https://pokeapi.co/api/v2/pokemon/'

  constructor(private http:HttpClient) {
    console.log('pokedex')
  }

  getPokemon(index:string){
    let headers=new HttpHeaders()
      .set('Type-content', 'application/json')

    // return this.http.get<any>(this.urlBase, {headers:headers})
    return this.http.get(this.urlBase + index)
  }
}
