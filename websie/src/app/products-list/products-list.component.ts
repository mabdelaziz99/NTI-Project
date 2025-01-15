import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-list',
  standalone: false,
  
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  products!:any[];
 staticURL=''
constructor(private _productS:ProductsService){
}
  ngOnInit(): void {
    this.staticURL = this._productS.staticFilesURL;
   this._productS.getProducts().subscribe(data=>{
    this.products= data;
    console.log(data)
   })
  }
  addToCart(id: string){
    console.log(id)
    console.log('kkkkk')
  }
  
  
}
