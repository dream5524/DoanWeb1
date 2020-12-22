import { Component, OnInit, Input } from '@angular/core';
import { listSPP } from '../listSPP';
import { SPP } from '../SPP';
import { HeroService } from '../hero.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-editadmin',
  templateUrl: './editadmin.component.html',
  styleUrls: ['./editadmin.component.css']
})
export class EditadminComponent implements OnInit {

  @Input() list1: Subject<any>;
  fulldetailsadmin: any[];
  @Input() fulledit: SPP;

  //save edit
  save(): void {
    this._heroService.updateSP(this.fulledit).subscribe();
  }

  constructor(private _heroService: HeroService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.list1.subscribe(
      det1 => {
        this.fulledit = det1;
        $("#bd-example-modal-lg").modal('show');
      },
      error => {
        console.log(error);
      }

    )
  }

}
