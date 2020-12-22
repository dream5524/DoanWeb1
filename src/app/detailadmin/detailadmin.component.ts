import { Component, OnInit, Input } from '@angular/core';
import { listSPP} from '../listSPP';
import { SPP } from '../SPP';
import { HeroService } from '../hero.service';
import { Subject } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-detailadmin',
  templateUrl: './detailadmin.component.html',
  styleUrls: ['./detailadmin.component.css']
})
export class DetailadminComponent implements OnInit {

  @Input() list: Subject<any>;
  @Input() list1: Subject<any>;

  fulldetailsadmin: any[];
  fulledit : any[];
  sanpham: SPP[];

  constructor() { }

  ngOnInit() {
    this.list.subscribe(
      det => {
        this.fulldetailsadmin = det;
        $("#exampleModaldetail").modal('show');
      },
      error => {
        console.log(error);
      }

    )


  }

}
