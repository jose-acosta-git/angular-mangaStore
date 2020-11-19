import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from './book-list/Book';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private _cartList: Book[] = [];
  _cartListSubjet: BehaviorSubject<Book[]> = new BehaviorSubject([]);
  public cartList: Observable<Book[]> = this._cartListSubjet.asObservable();

  constructor() { }


  addToCart(book: Book) {
    let item: Book = this._cartList.find((v1) => v1.name == book.name);
    if (!item) {
      this._cartList.push({... book});
    } else {
      item.quantity += book.quantity;
    }
    this._cartListSubjet.next(this._cartList);
  }
}
