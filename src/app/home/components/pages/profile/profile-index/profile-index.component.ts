import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { PermissionsService } from './services/permissions.service';


@Component({
  selector: 'app-profile-index',
  templateUrl: './profile-index.component.html',
  styleUrls: ['./profile-index.component.scss']
})
export class ProfileIndexComponent implements OnInit {
  constructor(private perms: PermissionsService) { }
  arPerm: boolean[];
  ngOnInit(): void {
    this.getPermissions();
  }

  private getPermissions(): any {
    this.perms.userPermissions()
      .subscribe(
        data => {
          this.arPerm = data;
          
        },
        error => {
          console.log('Error al obtener los permisos')
        }
      )
  }
}
