import { Component, OnInit, Injectable } from '@angular/core';
import { SPP } from '../SPP';
import { listSPP} from '../listSPP';
import { HeroService } from '../hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-detail-the-loai',
  templateUrl: './detail-the-loai.component.html',
  styleUrls: ['./detail-the-loai.component.css']
})
export class DetailTheLoaiComponent implements OnInit {

  sanpham: SPP[];
  ListTL: listSPP[];
  filtercontact = [];
  selectedProduct: Subject<any> = new Subject;

//link theo the loai
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

  constructor(private _HeroService: HeroService, private _router: Router, private _routTL: ActivatedRoute, private _rout: ActivatedRoute) { }



  ngOnInit() {

    this._HeroService.getcustomer().subscribe(p => this.sanpham = p);
    this._HeroService.getTheLoai().subscribe(p => this.ListTL = p);
    this.filtercontact = this.sanpham;
    this.creatPage();
  }

}
