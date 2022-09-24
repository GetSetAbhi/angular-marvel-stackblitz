import { Component, OnInit, VERSION } from '@angular/core';
import { MarvelService } from './services/marvel.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.marvelService.getAllCharacters().subscribe((response) => {
      if (response.data) {
        response.data.results.forEach(function (value) {
          console.log(value);
        });
      }
    });
  }
  name = 'Angular ' + VERSION.major;
}
