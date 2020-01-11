import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/Character';
import { GrootService } from '../../services/groot.service'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {
  title = 'Guardians of the Galaxy API';
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
  characters = this.grootService.getCharacters();

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
    // pokemonList :Pokemon[] = [];  // :Pokemon8[] = :Array:Pokemon
  // allPokemon :Observable<Pokemon[]> = this.pokeService.getAllPokemon();


}
