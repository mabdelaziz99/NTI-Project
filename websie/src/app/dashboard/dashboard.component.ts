import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  products = [
    { id: 1, name: 'Product A', price: 100, stock: 10 },
    { id: 2, name: 'Product B', price: 200, stock: 5 }
  ];

  orders = [
    { id: 101, customer: 'John Doe', total: 150, status: 'Pending' },
    { id: 102, customer: 'Jane Smith', total: 300, status: 'Shipped' }
  ];

  users = [
    { id: 1, name: 'Admin', email: 'admin@example.com', role: 'Admin' },
    { id: 2, name: 'User', email: 'user@example.com', role: 'Customer' }
  ];

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
constructor(private _auth:AuthService){
 
}
  ngOnInit(): void {
    console.log(this._auth.getDecodeToken());
    
  }


}
