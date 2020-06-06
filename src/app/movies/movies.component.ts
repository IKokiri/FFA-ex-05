import { Component } from "@angular/core";

@Component({
  selector: "movies-component",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent {
  movies = [
    { name: "Lawrence da Arábia" },
    { name: "Uma Odisseia no Espaço" },
    { name: "Cidadão Kane" },
    { name: "O Poderoso Chefão" },
    { name: "Andrei Rublev" },
    { name: "Os Sete Samurais" },
    { name: "O Sétimo Selo" },
    { name: "O Anjo Exterminador" }
  ];
  moviesTela = [];

  ngOnInit() {
    this.moviesTela = this.movies;
  }

  onChange(term) {
    this.moviesTela = this.movies.filter(filmes => {
      return filmes.name.toLowerCase().indexOf(term) > -1;
    });
  }
}
