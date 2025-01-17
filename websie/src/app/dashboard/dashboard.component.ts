import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProductsService } from '../services/products.service';
import { OrderService } from '../services/order.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  products!:any[];
  orders!:any[];
  users!:any[];

  constructor(private _productS:ProductsService, private _auth: AuthService, private _order: OrderService, private _user: UserService){
  }

  ngOnInit(): void {
   this._productS.getProducts().subscribe(data=>{
    this.products= data;
    console.log(data)

    console.log(this._auth.getDecodeToken());
   })
   this._order.getOrder().subscribe(data=>{
    this.orders= data;
  })

  this._user.getUsers().subscribe(data=>{
    this.users= data;
  })
  }

  // orders = [
  //   { id: 101, customer: 'John Doe', total: 150, status: 'Pending' },
  //   { id: 102, customer: 'Jane Smith', total: 300, status: 'Shipped' }
  // ];

  // users = [
  //   { id: 1, name: 'Admin', email: 'admin@example.com', role: 'Admin' },
  //   { id: 2, name: 'User', email: 'user@example.com', role: 'Customer' }
  // ];

  // Methods for handling actions
  addProduct(): void {
    console.log('Add Product clicked');
    // Logic to add a new product
    alert('Add Product functionality is not yet implemented.');
  }

  manageOrders(): void {
    console.log('Manage Orders clicked');
    // Logic to view or update orders
    alert('Manage Orders functionality is not yet implemented.');
  }

  manageUsers(): void {
    console.log('Manage Users clicked');
    // Logic to manage user accounts
    alert('Manage Users functionality is not yet implemented.');
  }

  adjustSettings(): void {
    console.log('Adjust Settings clicked');
    // Logic to update settings
    alert('Settings functionality is not yet implemented.');
  }

  logout(): void {
    console.log('Logout clicked');
    // Logic for logout functionality
    alert('Logout functionality is not yet implemented.');
  }


}
