import { Component, OnInit } from '@angular/core';
import { SPP } from '../SPP';
import { listSPP } from '../listSPP';
import { HeroService } from '../hero.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})

export class TrangchuComponent implements OnInit {
//danh sach sach
  SP: SPP[];
//danh sach ten tl
  ListTL: listSPP[];
  selectedProduct: Subject<any> = new Subject;

  getpopup(det) {
    this.selectedProduct.next(det);
  }

  constructor(private _HeroService:HeroService) { }

  ngOnInit() {
    this._HeroService.getcustomer().subscribe(p => this.SP = p);
    this._HeroService.getTheLoai().subscribe(p=>this.ListTL=p);
  }

}
