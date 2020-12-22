import { Component, OnInit, Input } from '@angular/core';
import { SPP } from '../SPP';
import { HeroService } from '../hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() SP: SPP;
  sanpham: SPP[];
  selectedProduct: Subject<any> = new Subject;

  getpopup(det) {
    this.selectedProduct.next(det);
  }

  getSPRoute(): void {
    const id = +this._rout.snapshot.paramMap.get('id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this._rout.snapshot.paramMap)}`);
    
    this._HeroService.getOneBook(id).subscribe(p => this.SP = p);
  }
  constructor(private _HeroService: HeroService, private _rout: ActivatedRoute, private _router: Router, private _routTL: ActivatedRoute) { }

  ngOnInit() {
    
    this.getSPRoute();
  }

}
