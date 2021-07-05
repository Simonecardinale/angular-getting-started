import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductListInterface } from './product-list-interface';
import {tap, map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProductListServiceService {
  private url = './api/products/products.json';

  products$ = this._http.get<ProductListInterface[]>(this.url).pipe(
    tap(data=>console.log(data)
    )
    // map(data=>console.log(data)
  )
    
  constructor(private _http:HttpClient) {
    
  }
  
}
