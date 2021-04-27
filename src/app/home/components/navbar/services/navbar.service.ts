import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  public logout(): void {
    this.loginService.deleteToken();
    window.location.href = window.location.href;
  }
  public getUserInfo(){
    
  }
}
