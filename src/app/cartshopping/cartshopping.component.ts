import { Component, OnInit, Input } from '@angular/core';
import { CartSPP } from '../CartSPP';
import { HeroService } from '../hero.service';
import { Subject } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-cartshopping',
  templateUrl: './cartshopping.component.html',
  styleUrls: ['./cartshopping.component.css']
})
export class CartshoppingComponent implements OnInit {

  constructor(private _HeroService: HeroService) {  }

  giohang: CartSPP[] = [];
  @Input() list: Subject<any>;
  fulldetails: any[];
  

  //addcart
  newcartBookname = '';
  newcartAuthor = '';
  newcartDetail = '';
  newcartImage = '';
  newcartPrice = 0;
  newcartquality = 0;

  addcart() {
    this.giohang.unshift({
      cart_id: this.giohang.length + 1,
      cartBookname: this.newcartBookname,
      cartAuthor: this.newcartAuthor,
      cartImage: this.newcartImage,
      cartPrice: this.newcartPrice,
      cartquality: this.newcartquality,
      _id : 1,
    })
    this.newcartBookname = '';
    this.newcartAuthor = '';
    this.newcartDetail = '';
    this.newcartImage = '';
    this.newcartPrice = 0;
    this.newcartquality = 0;



  }

  //add từ details sang giohang
  addfromcartnamebook(book: string): void {
    this.newcartBookname = book;
  }

  addfromcartPrice(Price: number): void {
    this.newcartPrice = Price;
  }

  addfromcartImage(Image: string): void {
    this.newcartImage = Image;
  }

  addfromcartAuthor(Author: string): void {
    this.newcartAuthor = Author;
  }



  //thanh toan gio hang
  total = 0;
  totalPrice(): void {
    this.total = 0;
    for (var i = 0; i < this.giohang.length; i++) {
      this.total += (this.giohang[i].cartPrice * this.giohang[i].cartquality);
    }
  }


  delpopup(pid) {
    for (var i = 0; i < this.giohang.length; i++) {
      if (this.giohang[i].cart_id === pid) {
        this.giohang.splice(i, 1);
      }
    }
    this.totalPrice();
  }

  add(pid) {
    for (var i = 0; i < this.giohang.length; i++) {
      if (this.giohang[i].cart_id === pid) {
        this.giohang[i].cartquality += 1;
      }
    }
    this.totalPrice();
    console.log(this.giohang);
  }

  del(pid) {
    for (var i = 0; i < this.giohang.length; i++) {
      if (this.giohang[i].cart_id === pid) {
        this.giohang[i].cartquality -= 1;
      }
    }
    this.totalPrice();
    console.log(this.giohang);
  }

  ngOnInit() {
    this._HeroService.getGiohang().subscribe(p => this.giohang = p);
    this.totalPrice();

    this.list.subscribe(
      det => {
        this.fulldetails = det;
        $("#exampleModal").modal('show');
      },
      error => {
        console.log(error);
      }

    )

  }

}
