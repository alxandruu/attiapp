import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  redirectUrl: string;
  baseUrl: string = `${window.location.protocol}//${window.location.hostname}/attiapp/php`;

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }

  public login(username, password, remember) {
    return this.http.post(this.baseUrl + '/login.php', { username, password })
      .pipe(map(Users => {
        this.setToken(Users[0].id, remember);
        this.getLoggedInName.emit(true);
        return Users;
      }));
  }

  //token
  private setToken(token: string, remember: boolean): void {
    if (remember == true) {
      localStorage.setItem('token', token);
    } else {
      sessionStorage.setItem('token', token);
    }
  }

  private getToken(): string {
    const x = localStorage.getItem('token');
    if (x != null) {
      return x;
    } else {
      return sessionStorage.getItem('token');
    }
  }

  public deleteToken(): void {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
  }
  public isLoggedIn(): boolean {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
}
