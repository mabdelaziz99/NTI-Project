import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css'],
  standalone: true
})
export class MyaccountComponent {
  constructor(private router: Router) {}

  // Navigate to different sections
  navigateTo(section: string): void {
    switch (section) {
      case 'orders':
        this.router.navigate(['/orders']); // Update with your actual route
        break;
      case 'addresses':
        this.router.navigate(['/addresses']);
        break;
      case 'payments':
        this.router.navigate(['/payments']);
        break;
      case 'settings':
        this.router.navigate(['/settings']);
        break;
      case 'wishlist':
        this.router.navigate(['/wishlist']);
        break;
      default:
        console.error('Invalid section:', section);
    }
  }
}
