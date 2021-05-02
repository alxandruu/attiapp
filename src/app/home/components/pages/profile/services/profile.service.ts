import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl: string = `${window.location.protocol}//${window.location.hostname}/attiapp/php/profile`;
  constructor(private http: HttpClient) { 

  }

  public change(passact, passnew, token){
    return this.http.post(this.baseUrl + '/changePass.php', {passact, passnew, token})
    .pipe(map(datos => {
        return datos;
    }));
  }
}
