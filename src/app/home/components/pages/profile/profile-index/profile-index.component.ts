import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { LoginApiService } from 'src/app/_services/login-api.service';

@Component({
  selector: 'app-profile-index',
  templateUrl: './profile-index.component.html',
  styleUrls: ['./profile-index.component.scss']
})
export class ProfileIndexComponent implements OnInit {

  constructor(private dataService: LoginApiService) {

  }

  ngOnInit(): void {
    this.hola();
  }
  hola() {
    this.dataService.userPermissions()
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log("ERROR");
        });
  }
}
