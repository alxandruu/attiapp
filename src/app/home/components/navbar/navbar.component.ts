import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { NavbarService } from './services/navbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  name: string ;
  profile_img: string;

  constructor(private navbarService: NavbarService) {
    // this.userData();
  }

  ngOnInit(): void {
    this.navbarService.getUserInfo()
    .pipe(first())
      .subscribe(
        data => { 
          let img: string = (data["img_profile"] == '')? 'default.jpg':data["img_profile"]; 
          this.name = data["name"];
          this.profile_img = '../../../../assets/img/users/' + img;
        },
        error => {
          console.log("Error al obtener la imágen.");
        });;
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
}



