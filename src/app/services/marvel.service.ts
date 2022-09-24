import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterDataWrapper } from '../model/marvel-model.dto';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  publicKey = '6493ff23f4f9b467be44a6e02463fbdd';

  privateKey = '3ff767aded2356837a8e64f5287084357fc25212';

  constructor(private http: HttpClient) {}

  public getAllCharacters() {
    let url = 'https://gateway.marvel.com:443/v1/public/characters';
    return this.http.get<CharacterDataWrapper>(url);
  }
}
