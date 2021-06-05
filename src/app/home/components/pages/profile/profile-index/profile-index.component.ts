import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserLogedService } from 'src/app/_services/user-loged.service';


@Component({
  selector: 'app-profile-index',
  templateUrl: './profile-index.component.html',
  styleUrls: ['./profile-index.component.scss']
})
export class ProfileIndexComponent implements OnInit {
  userInfo = {
    'username': null,
          'admin_perm': null,
          'name': null,
          'email':null
  };
  fileURL: String = `${window.location.protocol}//${window.location.hostname}/attiapp/resources/manual_Attia.pdf`;
  constructor(private userLoged: UserLogedService) { }

  ngOnInit(): void {
    this.userLoged.userinfo.subscribe(
      data => {
        this.userInfo = {
          'username': data.username,
          'admin_perm': data.admin_perm,
          'name': data.name + ' ' +data.surname,
          'email':data.email
        };
      }
    )

  }
 
}
