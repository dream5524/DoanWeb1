import { Injectable } from '@angular/core';
import { Observable ,of ,from} from 'rxjs';
import { SPP } from './SPP';
import { listSPP } from './listSPP';
import { CartSPP } from './CartSPP';
import { Pay } from './pay';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError,map ,  tap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class HeroService {

  SP :SPP[] = [];
  listSP : listSPP[] = [];
  giohang: CartSPP[] = [];
  thanhtoan: Pay[] = [];


  //DetailBooks
  SppUrl = 'https://api.npoint.io/0f10bc1a8171562876b7/SPP/'
  getcustomer(): Observable<SPP[]> {
    return this.http.get<SPP[]>(this.SppUrl)
  }

  //ListSanPham
  ListUrl = 'https://api.npoint.io/0f10bc1a8171562876b7/listSPP'
  getTheLoai(): Observable<listSPP[]> {
    return this.http.get<listSPP[]>(this.ListUrl)
  }

  //Giỏ Hàng
  getGiohang(): Observable<CartSPP[]> {
    return of(this.giohang);
  }

  //Thanh Toán
  PayUrl = 'https://api.npoint.io/0f10bc1a8171562876b7/pay'
  getThanhToan(): Observable<Pay[]> {
    return this.http.get<Pay[]>(this.PayUrl)
  }

  //Login
  checkLogin(email: string, pass: string): boolean {
    if (email == "username" && pass == "12345")
      return true;
    return false;
  }
  checkAdmin(email: string, pass: string): boolean {
    if (email == "admin" && pass == "admin")
      return true;
    return false;
  }

  //get one book
  getOneBook(id: number): Observable<SPP> {
    const url = `${this.SppUrl}/${id}`;
    return this.http.get<SPP>(url).pipe(
      tap(_=> console.log(`ShowId=${id}`)),
    );
  }

  //Delete
  deleteSP(id:number):Observable<SPP>{
    const Url =`${this.SppUrl}/${id}`;
    return this.http.delete<SPP>(Url).pipe(
        tap(_=> console.log(`DeleteId= ${id}`)),
    )
  }

  //AddBooks
  addSP(newSP: SPP): Observable<SPP> {
    return this.http.post<SPP>(this.SppUrl, newSP).pipe(
      tap((sp: SPP) => console.log(`inserted book = ${JSON.stringify(sp)}`)),
      catchError(error => of(new SPP()))
    );
  }

  //AddPay
  addPay(newPay: Pay): Observable<Pay> {
    return this.http.post<Pay>(this.PayUrl, newPay).pipe(
      tap((pay: Pay) => console.log(`inserted pay = ${JSON.stringify(pay)}`)),
      catchError(error => of(new Pay()))
    );
  }


  //UpdateSP
  updateSP(Update: SPP): Observable<any> {
    return this.http.put(`${this.SppUrl}/${Update.id}`, Update).pipe(
      tap(updated => console.log(`updated = ${JSON.stringify(updated)}`)),
      catchError(error => of(new SPP()))
    );
  }



  constructor(private http:HttpClient) {

   }
}
