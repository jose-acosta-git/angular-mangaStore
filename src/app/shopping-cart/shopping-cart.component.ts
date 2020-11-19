import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book-list/Book';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartList$: Observable<Book[]>;

  constructor(private cart: ShoppingCartService) {
    this.cartList$ = cart.cartList;
  }

  ngOnInit(): void {
  }

}
