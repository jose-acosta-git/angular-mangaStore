import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { Book } from './Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(
    private shoppingCart: ShoppingCartService,  
    private booksDataService: BookDataService
  ) {}

  ngOnInit(): void {
    this.booksDataService.getAll()
    .subscribe(books => this.books = books);
  }

  maxReached() {
    alert("no hay mas");
  }

  addToCart(book: Book) {
    this.shoppingCart.addToCart(book);
    book.stock -= book.quantity;
    book.quantity = 0;
  }

}
