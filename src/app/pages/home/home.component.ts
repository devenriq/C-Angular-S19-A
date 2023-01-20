import { Component } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public pokemons : any=[]

  constructor(private pokedex:PokedexService){
    let pokemonData

    for (let i = 1; i < 15; i++) {
      this.pokedex.getPokemon(String(i)).subscribe((res:any) =>{
        pokemonData = {
          position:i,
          img: res.sprites.front_default,
          name: res.name
        }
        this.pokemons.push(pokemonData)
        console.log(this.pokemons)
      })
    }

  }


}
