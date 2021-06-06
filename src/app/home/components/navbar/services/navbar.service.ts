
import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/_services/login.service';

@Injectable({
  providedIn: 'root'
})

export class NavbarService {
  
  constructor(private loginService: LoginService) { }

  public logout(): void {
    this.loginService.deleteToken();
    window.location.href = window.location.href;
  }

  
}
