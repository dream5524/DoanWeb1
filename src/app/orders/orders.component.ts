import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Pay } from '../pay';

declare var $: any;

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  @Input() list2: Subject<any>;
  fulldetailsadmin: any[];
  fullorders: any[];
  funlledit: any[];

  Pay: Pay[];

  constructor() { }

  ngOnInit() {
    this.list2.subscribe(
      det2 => {
        this.fullorders = det2;
        $("#exampleModalLong").modal('show');
      },
      error => {
        console.log(error);
      }

    )
  }

}
