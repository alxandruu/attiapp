import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { LoginService } from '../login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserLogedService {

  userinfo; 
  
  baseUrl: string = `${window.location.protocol}//${window.location.hostname}/attiapp/php`;
  constructor(private loginService:LoginService, private http: HttpClient) {
    this.userinfo = this.getUserInfo();
   }

  private getUserInfo() {
    let token = this.loginService.getToken();
    return this.http.post(this.baseUrl + '/others/userinfo.php', { token })
      .pipe(map(data => {
        return data;
      }));
  }
}
