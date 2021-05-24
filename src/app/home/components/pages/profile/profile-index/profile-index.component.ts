import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserLogedService } from 'src/app/_services/user-loged.service';
import { PermissionsService } from './services/permissions.service';


@Component({
  selector: 'app-profile-index',
  templateUrl: './profile-index.component.html',
  styleUrls: ['./profile-index.component.scss']
})
export class ProfileIndexComponent implements OnInit {
  userInfo;
  constructor(private userLoged: UserLogedService) { }

  ngOnInit(): void {
    this.userLoged.userinfo.subscribe(
      data => {
        this.userInfo = {
          'username': data.username,
          'admin_perm': (data.admin_perm)?'administrador':'normal',
          'name': data.name + ' ' +data.surname,
          'email':data.email
        };     
      }
    )

  }

}
