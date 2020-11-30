import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MangaStoreBooksComponent } from './manga-store-books/manga-store-books.component';
import { MangaStoreAboutComponent } from './manga-store-about/manga-store-about.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    ShoppingCartComponent,
    MangaStoreBooksComponent,
    MangaStoreAboutComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
