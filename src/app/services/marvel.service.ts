import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterDataWrapper } from '../model/marvel-model.dto';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  rootUrl = 'https://gateway.marvel.com:443/v1/public';

  constructor(private http: HttpClient) {}

  public getAllCharacters() {
    let url = this.rootUrl + '/characters';
    return this.http.get<CharacterDataWrapper>(url);
  }
}
