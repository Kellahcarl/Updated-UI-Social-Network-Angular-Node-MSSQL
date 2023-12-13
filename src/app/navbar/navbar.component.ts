import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showFriendsModal = false;
  showProfileModal = false;
  showMobileMenu = false;

  toggleFriendsModal() {
    this.showFriendsModal = !this.showFriendsModal;
  }

  toggleProfileModal() {
    this.showProfileModal = !this.showProfileModal;
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
