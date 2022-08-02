import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loggedIn= false;
  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn();
  }

  logoutUser() {
    this.loginService.logout();
    location.reload();
  }

}
