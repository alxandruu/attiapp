import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { LoginService } from 'src/app/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl: string = `${window.location.protocol}//${window.location.hostname}/attiapp/php/profile`;
  constructor(private http: HttpClient, private loginService: LoginService) {

  }

  public change(passact, passnew, token) {
    return this.http.post(this.baseUrl + '/changePass.php', { passact, passnew, token })
      .pipe(map(datos => {
        return datos;
      }));
  }

  public changeIMG(img) {
    let token = this.loginService.getToken();
    return this.http.post(this.baseUrl + '/changePhoto.php', { img, token })
      .pipe(map(data => {
        return data;
      }));
  }
}
