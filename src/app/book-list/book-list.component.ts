import { Component, OnInit } from '@angular/core';
import { Book } from './Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor() { }

  books: Book[] = [
    {
      name: 'Fullmetal Alchemist',
      volume: 27,
      image: 'assets/img/fullmetal-alchemist.jpg',
      genre: 'Magic',
      price: 500,
      stock: 15,
      clearance: false,
      quantity: 0,
    },
    {
      name: 'One Piece',
      volume: 95,
      image: 'assets/img/one-piece.jpg',
      genre: 'Adventure',
      price: 430,
      stock: 5,
      clearance: true,
      quantity: 0,
    },
    {
      name: 'Solo Leveling',
      volume: 14,
      image: 'assets/img/solo-leveling.jpg',
      genre: 'Action',
      price: 650,
      stock: 47,
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Haikyuu!!',
      volume: 45,
      image: 'assets/img/haikyuu.jpg',
      genre: 'Sports',
      price: 530,
      stock: 0,
      clearance: true,
      quantity: 0,
    },
    {
      name: 'One Punch-Man',
      volume: 22,
      image: 'assets/img/one-punch-man.jpg',
      genre: 'Action',
      price: 490,
      stock: 37,
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Death Note',
      volume: 12,
      image: 'assets/img/death-note.jpg',
      genre: 'Drama',
      price: 510,
      stock: 25,
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Hunter x Hunter',
      volume: 36,
      image: 'assets/img/hunter-x-hunter.jpg',
      genre: 'Adventure',
      price: 320,
      stock: 15,
      clearance: true,
      quantity: 0,
    },
    {
      name: 'Re:Zero kara Hajimeru Isekai Seikatsu',
      volume: 6,
      image: 'assets/img/re-zero.jpg',
      genre: 'Drama',
      price: 560,
      stock: 43,
      clearance: false,
      quantity: 0,
    },
  ]

  maxReached() {
    alert("no hay mas");
  }

  addToCart(book: Book) {

  }

  ngOnInit(): void {
  }

}
