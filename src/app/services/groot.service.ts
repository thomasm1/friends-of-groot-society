import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/Character';
@Injectable({
  providedIn: 'root'
})

export class GrootService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient 
  ) {  }

  // addCharacter(char :Character) :Observable<Character> {
  //   return this.http.post<Character>("http://localhost:8080/PokeApp/addCharacters.do", char, {headers: this.headers});
  // }

  // getGroot= function() {
  //   console.log(this.title);
  // }

  public_key: '5fbd9e22b0c348faa25fd3d07bee8248';
  hash: 'dce73dc128d232d3a6c22decdf3b5f272bbc5178';
  ts: any = Math.floor(Date.now() / 1000);
  // new Date().getTime() 
  // new Date().valueOf()
// NASA
//   let url = "https://api.nasa.gov/planetary/apod?api_key=mF6DQEqY3WtCubgab5P2otQQ6bP1b8nY24VmiJw0";
// STAR WARS 
//  xhttp.open("GET", "https://swapi.co/api/people/" + randomNum + "/?format=json", true);
/*  char.name;   char.height;   char.eye_color; */
 
  getCharacters = function () {
    return this.http.get(`http://gateway.marvel.com/v1/public/characters?apikey=${this.public_key}&ts=${this.ts}&hash=${this.hash}`);
  }

  getPhotos(albumId) {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    // return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);

  }

  getAlbums = function () {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
    // return this.http.get('https://swapi.co/api/people');
  }
  
  getStarWars = function () { 
    return this.http.get('https://swapi.co/api/people/1/?format=json');
  }
}