import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from 'src/app/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(private loginService: LoginService, private http: HttpClient) { }

  public userPermissions(){
    let tokenUser = this.loginService.getToken();
    return this.http.post<any>(this.loginService.baseUrl + '/perms.php', { tokenUser })
    .pipe(map(Perms => {
      return Perms;
    }));
  }
}
