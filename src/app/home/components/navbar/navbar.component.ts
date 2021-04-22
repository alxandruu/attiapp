import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { first } from 'rxjs/operators';
import { LoginApiService } from 'src/app/_services/login-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  name: string;
  profile_img: string;
  loginbtn: boolean;
  logoutbtn: boolean;

  constructor(private dataService: LoginApiService) {
    this.userData();
  }

  logout() {
    this.dataService.deleteToken();
    this.dataService.deleteData();
    window.location.href = window.location.href;
  }

  ngOnInit(): void {
  }

  userData() {
    let arr = this.dataService.getData();
    this.name = arr[0]
    this.profile_img = arr[1];
  }
}

