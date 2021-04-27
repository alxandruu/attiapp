import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { LoginApiService } from 'src/app/_services/login-api.service';
import { OutputService } from 'src/app/_services/other/output.service';

@Component({
  selector: 'app-profile-index',
  templateUrl: './profile-index.component.html',
  styleUrls: ['./profile-index.component.scss']
})
export class ProfileIndexComponent implements OnInit {
  perms:any[];
  constructor(private dataService: LoginApiService, private outputService: OutputService) {
    
  }

  ngOnInit(): void {
    this.getPermissions();
  }

  getPermissions(): any {
     this.dataService.userPermissions()
      .pipe(first())
      .subscribe(
        data => {  
          this.perms = data;
        },
        error => {
          console.log("Error al obtener los permisos.");
        });
  }
}
