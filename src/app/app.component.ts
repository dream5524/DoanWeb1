import { Component, Input } from '@angular/core';
import { SPP } from './SPP';
import { HeroService } from './hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartSPP } from './CartSPP';
import { listSPP } from '../app/listSPP';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'web';

  sanpham: SPP[];
  listSearchProduct: SPP[];
  ListTL: listSPP[];
  giohang: CartSPP[];
  filtercontact = [];
  selectedProduct: Subject<any> = new Subject;
  constructor(private _HeroService: HeroService, private _router: Router, private _routTL: ActivatedRoute, private _rout: ActivatedRoute) { }

  //Filter
  FilterList(gid: number) {
    this.filtercontact = gid == -1 ? this.sanpham : this.sanpham.filter(c => c.IDTheLoai == gid.toString());
    this.creatPage();
  }
  //tim kiem
_filter:string;
get filter():string{
  return this._filter;
}
set filter(value:string){
  this._filter = value;
  this.filtercontact = this.filter ? this._HeroService.SP.filter(p => p.Bookname.toLowerCase().indexOf(this.filter) !== -1) : this._HeroService.SP;
}


  getpopup(det) {
    this.selectedProduct.next(det);
  }

  //Phân Trang
  page = [];
  pitem = 8;
  cpage = 1;
  creatPage() {
    this.page = [];
    //
    let n = this.filtercontact.length % this.pitem != 0 ? this.filtercontact.length / this.pitem + 1 : this.sanpham.length / this.pitem
    for (let i = 1; i <= n; i++) {
      this.page.push(i);
    }
  }
  setPage(p: number) {
    this.cpage = p;
  }

  //search
  _search: string;
  get search(): string {
    return this._search;
  }

  set search(value: string) {
    this._search = value;
    this.listSearchProduct = this.search ? this.sanpham.filter(p => p.Bookname.toLowerCase().includes(this.search) == true) : [];
  }


  //ofSeach
  of=true;
  ofSearch(){
    this.of=false
  }
  onSearch(){
    this.of=true
  }

  //Login
  password: '';
  email: '';
  onLogin() {
    if (this._HeroService.checkLogin(this.email, this.password))
      return this._router.navigate(['trangchu']);
    else if (this._HeroService.checkAdmin(this.email, this.password))
      return this._router.navigate(['admin']);
  }


  ngOnInit() {
    this._HeroService.getcustomer().subscribe(p => this.sanpham = p);
    this._HeroService.getTheLoai().subscribe(p=>this.ListTL=p);
  }
}


