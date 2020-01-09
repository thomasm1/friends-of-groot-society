import { Component, OnInit } from '@angular/core';
import { Character } from '../../app/models/Character';
import { GrootService } from '../../app/services/groot.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-groot',
  templateUrl: './groot.component.html',
  styleUrls: ['./groot.component.css']
})
export class GrootComponent implements OnInit {
  title = 'Groot';
  constructor(private grootService: GrootService, ) { }

  ngOnInit() {
    // this.displayAllCharacters();
  }
  characterList: Character[] = [];  // :Pokemon[] = :Array:Pokemon
  allCharacters: Observable<Character[]> = this.grootService.getCharacters();

  getCharacter() {
    console.log(this.grootService.getCharacters());
  }
  displayCharacters() {
    console.log(this.displayAllCharacters());
  }

  albums = this.grootService.getAlbums();
  characters = this.grootService.getCharacters();
  getAlbums = this.grootService.getAlbums();
  // pokemonList :Pokemon[] = [];  // :Pokemon8[] = :Array:Pokemon
  // allPokemon :Observable<Pokemon[]> = this.pokeService.getAllPokemon();

  id: number;
  name: string;
  type: string;

  displayAllCharacters() {
    this.allCharacters.subscribe(
      //function to execute when the Observable
      //receives information because the call is successful.
      (response) => {
        this.characterList = response;
        console.log(this.characterList);
      },
      //function to execute when the Observabler receives
      //incorrect/faulty information -> call is unsuccessful.
      (response) => {
        return "Sorry it failed";
      }
    );
  }

  // addPokemon() {
  //   this.pokeService.addPokemon(new Pokemon(this.id, this.name, this.type)).subscribe(
  //     (response) => {
  //       console.log(response);
  //       let list = this.pokemonList.slice();
  //       list.push(response);
  //       this.pokemonList = list;
  //     },
  //     (response) => {
  //       console.log("Failed to add Pokemon");
  //       console.log(response);
  //     }
  //   );
  // }

}
