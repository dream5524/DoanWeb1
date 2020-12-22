import { Component, OnInit } from '@angular/core';
import { CartSPP } from '../CartSPP';
import { Pay } from '../pay';
import { HeroService } from '../hero.service';
import { concat } from 'rxjs/operators';


@Component({
  selector: 'app-paycart',
  templateUrl: './paycart.component.html',
  styleUrls: ['./paycart.component.css']
})
export class PaycartComponent implements OnInit {

  constructor(private _HeroService: HeroService) { }

  giohang: CartSPP[];
  thanhtoan: Pay[];

  //Thêm
  addpay(FirstName: string, LastName: string, Address: string, Email: string, Pay1: string, Phone: string): void {
    const newPay: Pay = new Pay();
    newPay.FirstName = FirstName;
    newPay.LastName = LastName;
    newPay.Address = Address;
    newPay.Email = Email;
    newPay.BuyBook = this.buybook;
    newPay.Quantity = this.quantity;
    newPay.Price = Number(this.newPrice);
    newPay.id = this.thanhtoan.length + 1;
    newPay.pay = Pay1;
    newPay.phone = Phone;


    this._HeroService.addPay(newPay)
      .subscribe(InsertPay => {
        this.thanhtoan.push(InsertPay);
      });
  }

  //Quantity
  quantity = '';
  addpayquantity(): void {
    this.quantity = '';
    for (var i = 0; i < this.giohang.length; i++) {
      this.quantity += this.giohang[i].cartquality + ', ';
    }
  }


  //BuyBook
  buybook = '';
  addpayBuybook(): void {
    this.buybook = '';
    for (var i = 0; i < this.giohang.length; i++) {
      this.buybook += this.giohang[i].cartBookname + ', ';
    }
  }
  //Price
  newPrice = 0;
  addpayPrice(Price: number): void {
    this.newPrice = Price;
  }

  total = 0;
  totalPrice(): void {
    this.total = 0;
    for (var i = 0; i < this.giohang.length; i++) {
      this.total += (this.giohang[i].cartPrice * this.giohang[i].cartquality);
    }
  }

  remove(id: number) {
    const index = this.giohang.findIndex(p => p._id == id);
    this.giohang.splice(index);
  }

  ngOnInit() {
    this._HeroService.getGiohang().subscribe(p => this.giohang = p);
    this._HeroService.getThanhToan().subscribe(p => this.thanhtoan = p);
    this.totalPrice();
    this.addpayBuybook();
    this.addpayquantity();
  }

}
