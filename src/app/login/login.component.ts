import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router, private _service: HeroService) { }


  password: '';
  email: '';



  onLogin() {
    if (this._service.checkLogin(this.email, this.password))
      return this.router.navigate(['trangchu']);
    else if (this._service.checkAdmin(this.email, this.password))
    return this.router.navigate(['admin']);
  }








  ngOnInit() {
  }

}
