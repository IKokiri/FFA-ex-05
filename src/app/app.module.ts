import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TitleComponent } from "./title/title.component";
import { SearchComponent } from "./search/search.component";
import { MoviesComponent } from "./movies/movies.component";
import { ImgComponent } from "./img/img.component";

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    SearchComponent,
    MoviesComponent,
    ImgComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
