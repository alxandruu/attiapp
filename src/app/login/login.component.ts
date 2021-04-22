import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginApiService } from '../_services/login-api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private dataService: LoginApiService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', Validators.required],
      remember: ['']
    });
  }

  ngOnInit(): void {
    if (this.dataService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }
  postdata(loginForm1) {
    this.dataService.userlogin(loginForm1.value.username, loginForm1.value.password, loginForm1.value.remember)
      .pipe(first())
      .subscribe(
        data => {
          const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
          this.router.navigate([redirect]);
        },
        error => {
          this.errLogin();
        });
  }
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  errLogin() {
    document.querySelector('#alertBox').innerHTML = `<div class="alert alert-danger alert-dismissible fade show  d-flex" role="alert">
   <img src="../../assets/icons/alert.svg" alt="Alert Exclamation Circle Color Red" class="me-2">Usuario o
   contraseña erróneos. Vuelve a intentarlo
   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
  }
}