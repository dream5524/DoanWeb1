import { TintucComponent } from './tintuc/tintuc.component';
import { Tintuc1Component } from './tintuc1/tintuc1.component';
import { Tintuc2Component } from './tintuc2/tintuc2.component';
import { Tintuc3Component } from './tintuc3/tintuc3.component';
import { Tintuc4Component } from './tintuc4/tintuc4.component';

import { LienheComponent } from './lienhe/lienhe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TrangchuComponent } from './trangchu/trangchu.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { DetailTheLoaiComponent } from './detail-the-loai/detail-the-loai.component';
import { PaycartComponent } from './paycart/paycart.component';
import { AdminComponent } from './admin/admin.component';
import { NewsComponent } from './news/news.component';



const routes: Routes = [
  { path: 'trangchu', component: TrangchuComponent },
  { path: 'dangnhap', component: LoginComponent },
  { path: 'trangchu/:TL/:id', component: DetailComponent },
  { path: 'TheLoai', component: DetailTheLoaiComponent },
  { path: '', redirectTo: '/trangchu', pathMatch: 'full' },
  { path: 'pay', component : PaycartComponent},
  { path: 'admin', component : AdminComponent},
  {path:'lienhe', component:LienheComponent},
  {path:'tintuc',component:TintucComponent},
  {path:'tintuc1',component:Tintuc1Component},
  {path:'tintuc2',component:Tintuc2Component},
  {path:'tintuc3',component:Tintuc3Component},
  {path:'tintuc4',component:Tintuc4Component},
  {path:'news',component: NewsComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
  ,
})

export class AppRoutingModule { }
