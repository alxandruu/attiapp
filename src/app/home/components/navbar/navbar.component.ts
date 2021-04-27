import { Component, OnInit } from '@angular/core';
import { NavbarService } from './services/navbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  name: string;
  profile_img: string;

  constructor(private navbarService: NavbarService) {
    // this.userData();
  }

  ngOnInit(): void {

  }

  public logout(): void {
    this.navbarService.logout();
  }

  // userData() {
  //   let arr = this.dataService.getData();

  //   this.name = arr[0]
  //   this.profile_img = (arr[1] == '') ? "default.jpg" : arr[1];
  // }

  public toogle(): void {
    var x = document.getElementById("nav2");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
}



