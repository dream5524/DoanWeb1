import { Component, OnInit, Input, Injectable } from '@angular/core';
import { listSPP} from '../listSPP';
import { SPP } from '../SPP';
import { HeroService } from '../hero.service';
import { Subject } from 'rxjs';
import { CartSPP } from '../CartSPP';
import { Pay } from '../pay';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  sanpham: SPP[];
  ListTL: listSPP[];
  Shopping: CartSPP[];
  Pay: Pay[];
  filtercontact = [];
  selectedProductadmin: Subject<any> = new Subject;
  selectededit: Subject<any> = new Subject;
  selectedorders: Subject<any> = new Subject;
  
 
//link theo the loai
  FilterList(gid: number) {
    this.filtercontact = gid == -1 ? this.sanpham : this.sanpham.filter(c => c.IDTheLoai == gid.toString());
    this.creatPage();
  }

  // Đếm Thể loại sách
  NumberOfContactByGroup(id: number) {
    if (id == 0)
      return this.sanpham.length;
    else {
      return this.sanpham.filter(c => c.IDTheLoai == id.toString()).length;
    }
  }


  //Phân Trang
  page = [];
  pitem = 10;
  cpage = 1;
  creatPage() {
    this.page = [];
    let n = this.filtercontact.length % this.pitem != 0 ? this.filtercontact.length / this.pitem + 1 : this.sanpham.length / this.pitem
    for (let i = 1; i <= n; i++) {
      this.page.push(i);
    }
  }
  setPage(p: number) {
    this.cpage = p;
  }


  //Chuyển Trang
  getpopup(det) {
    this.selectedProductadmin.next(det);
  }

  edit(det1) {
    this.selectededit.next(det1);
  }

  orders(det2) {
    this.selectedorders.next(det2);
  }

  //Ẩn Hiện Form
  showform = false;
  themdanhmuc() {
    this.showform = true;
  }
  huythem() {
    this.showform = false;
  }

//Xóa
delete(id:number):void{
  this._HeroService.deleteSP(id).subscribe(_ =>{
    this.filtercontact= this.filtercontact.filter(p => p.id !== id);
  })
}

//Thêm
add(Bookname:string,NamXB: number,IDTheLoai: string,Author:string,Detail:string,Price: number,TheLoai: string): void { 
        const newSP: SPP = new SPP();
        newSP.Bookname = Bookname; 
        newSP.NamXB = Number(NamXB);
        newSP.IDTheLoai = IDTheLoai;
        newSP.Author = Author;
        newSP.Detail = Detail;
        newSP.Image = "assets/img/d.jpg";
        newSP.Price = Number(Price);
        newSP.TheLoai = TheLoai;

  this._HeroService.addSP(newSP)
    .subscribe(InsertSP => {
      this.sanpham.push(InsertSP);
    });
}


of=false;


  constructor(private _HeroService: HeroService, private router:Router) { }

  ngOnInit() {
    this._HeroService.getcustomer().subscribe(p => this.sanpham = p);
    this._HeroService.getTheLoai().subscribe(p => this.ListTL = p);
    this._HeroService.getGiohang().subscribe(p => this.Shopping = p);
    this._HeroService.getThanhToan().subscribe(p => this.Pay = p);
    this.filtercontact = this.sanpham;
    this.creatPage();
  }

}
