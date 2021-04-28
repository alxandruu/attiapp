import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { LoginService } from 'src/app/login/services/login.service';

@Injectable({
  providedIn: 'root'
})

export class NavbarService {
  baseUrl: string = `${window.location.protocol}//${window.location.hostname}/attiapp/php`;
  constructor(private http: HttpClient, private loginService: LoginService) { }

  public logout(): void {
    this.loginService.deleteToken();
    window.location.href = window.location.href;
  }
  public getUserInfo() {
    let token = this.loginService.getToken();
    return this.http.post(this.baseUrl + '/others/userinfo.php', { token })
      .pipe(map(data => {
        return data;
      }));
  }
}
