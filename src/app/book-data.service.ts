import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Book } from './book-list/Book';

const URL = 'https://5fc543e436bc790016344978.mockapi.io/books';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }


  //Consume la API de libros y devuelve un observable
  public getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(URL)
      .pipe(
        tap((books: Book[]) => books.forEach(book => book.quantity = 0))
      );
  }

}
