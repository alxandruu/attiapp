import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserLogedService } from 'src/app/_services/user-loged.service';
import { NavbarService } from './services/navbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public name: string;
  public profile_img: string;

  constructor(private navbarService: NavbarService, private userLoged: UserLogedService) {

  }

  ngOnInit(): void {
this.user();
  }

  public logout(): void {
    this.navbarService.logout();
  }

  public toogle(): void {
    var x = document.getElementById("nav2");
    
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  private user() {
    this.userLoged.userinfo
      .pipe(first())
      .subscribe(
        data => {
          let img: string;

          if (data["img_profile"] == null || data["img_profile"] == undefined || data['img_profile'] == '') {
            data['img_profile'] = 'default.jpg';
            img = data['img_profile'];
          } else {
            img = data['img_profile'];
          }

          this.name = data["name"];
          this.profile_img = 'assets/img/users/' + img;
        },
        error => {
          console.log("ERROR NAVBAR");
        });
  }
}



