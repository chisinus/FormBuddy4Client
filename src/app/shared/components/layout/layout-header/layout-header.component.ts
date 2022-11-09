import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/modules/user/services/user-store.service';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
})
export class LayoutHeaderComponent {
  @Input() loggedIn: boolean = false;

  constructor(
    private userStoreService: UserStoreService,
    private router: Router
  ) {}

  onProfile(): void {}

  onLogout(): void {
    this.userStoreService.logout();
    this.router.navigate(['.']);
  }
}
