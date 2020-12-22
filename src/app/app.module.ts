import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import { TrangchuComponent } from './trangchu/trangchu.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { DetailTheLoaiComponent } from './detail-the-loai/detail-the-loai.component';
import { CartshoppingComponent } from './cartshopping/cartshopping.component';
import { PaycartComponent } from './paycart/paycart.component';
import { AdminComponent } from './admin/admin.component';
import { DetailadminComponent } from './detailadmin/detailadmin.component';
import { EditadminComponent } from './editadmin/editadmin.component';
import { OrdersComponent } from './orders/orders.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { Tintuc1Component } from './tintuc1/tintuc1.component';
import { Tintuc2Component } from './tintuc2/tintuc2.component';
import { Tintuc3Component } from './tintuc3/tintuc3.component';
import { Tintuc4Component } from './tintuc4/tintuc4.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    AppComponent,

    TrangchuComponent,

    LoginComponent,

    DetailComponent,

    DetailTheLoaiComponent,

    CartshoppingComponent,

    PaycartComponent,

    AdminComponent,

    DetailadminComponent,

    EditadminComponent,

    OrdersComponent,

    LienheComponent,

    Tintuc1Component,

    Tintuc2Component,

    Tintuc3Component,

    Tintuc4Component,

    TintucComponent,

    NewsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
