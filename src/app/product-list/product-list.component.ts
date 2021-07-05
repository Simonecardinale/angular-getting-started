import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { ProductListInterface } from './product-list-interface';
import { ProductListServiceService } from './product-list-service.service';


@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})



export class ProductListComponent implements OnInit {

  displayedColumns: string[] = [
    'image',
    'productName',
    'productCode',
    'releaseDate',
    'price',];

    products$ = this.productService.products$;
    showImage:boolean = false;
    dataSource = this.products$;

    private _listFilter = '';
    get listFilter(): string {
      return this._listFilter;
  }
    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: ProductListInterface[] = [];
  products: ProductListInterface[] = [];
  sub!:Subscription;


  constructor(private productService:ProductListServiceService) { }

  ngOnInit(): void {
    
    this.sub = this.productService.products$.subscribe({
      next: products =>{
        this.products = products;
        this.filteredProducts = this.products
      }
    })
    
  }

  showImageFunc(){
    this.showImage = !this.showImage
  }

  performFilter(filterBy: string): ProductListInterface[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: ProductListInterface) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

}
