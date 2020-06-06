import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "search-component",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent {
  term: string;

  @Output() respostaFamilia = new EventEmitter();

  onChange() {
    // this.change.emit({ term: "this.term" });
    console.log("a");
  }

  feedback(event) {
    this.respostaFamilia.emit(event);
  }
}
