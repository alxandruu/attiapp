import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from '../_models/users';
import { Perms } from '../_models/perms';
@Injectable({
  providedIn: 'root'
})
export class LoginApiService {
  redirectUrl: string;

  baseUrl: string = `${window.location.protocol}//${window.location.hostname}/attiapp/php`;
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }

  public userlogin(username, password, remember) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
      .pipe(map(Users => {
        this.setToken(Users[0].id, remember);
        this.setData([Users[0].name, Users[0].img_profile]);
        this.getLoggedInName.emit(true);
        return Users;
      }));
  }

  public userPermissions(){
    let tokenUser = this.getToken();
    return this.httpClient.post<any>(this.baseUrl + '/perms.php', { tokenUser })
    .pipe(map(Perms => {
      return Perms;
    }));
  }

  //token
  setToken(token: string, remember: boolean) {
    if (remember == true) {
      localStorage.setItem('token', token);
    } else {
      sessionStorage.setItem('token', token);
    }
  }
  setData(data) {
    localStorage.setItem('userData', data);
  }
  getData() {
    return localStorage.getItem('userData').split(',');
  }
  getToken() {
    const x = localStorage.getItem('token');
    if (x != null) {
      return x;
    } else {
      return sessionStorage.getItem('token');
    }
  }

  deleteToken() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
  }
  deleteData() {
    localStorage.removeItem('userData');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }

}
