import { Component, OnInit } from '@angular/core';
import { StateUser } from 'src/app/modules/user/models/stateUser';

@Component({
  selector: 'app-layout-inside',
  templateUrl: './layout-inside.component.html',
  styleUrls: ['./layout-inside.component.scss'],
})
export class LayoutInsideComponent implements OnInit {
  public stateUserInfo: StateUser = {} as StateUser;

  constructor() {}

  ngOnInit(): void {}

  profile(): void {}

  logout(): void {}
}
