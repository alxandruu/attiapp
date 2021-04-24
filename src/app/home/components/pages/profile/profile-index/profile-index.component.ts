import { Component, OnInit } from '@angular/core';
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
  }

}
