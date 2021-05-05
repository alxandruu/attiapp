import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { LoginService } from 'src/app/login/services/login.service';
import { ProfileService } from '../services/profile.service';
import * as $ from "jquery";
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
declare var $:any;

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {
 changeForm: FormGroup;

  constructor(private fb: FormBuilder, private profileService: ProfileService, private loginService: LoginService, private router: Router) {
    this.changeForm = this.fb.group({
      passact: [''],
      passnew: ['']
    
    });
   }

  postdata(changeForm) {
    let token = this.loginService.getToken();
    this.profileService.change(changeForm.value.passact, changeForm.value.passnew, token).pipe(first())
     .subscribe(
        data => {
         console.log(data);
         if(data[0]==true){
           $('#alertBox').html('');
           Swal.fire({
            title: data[1],
            icon: 'success',
            allowOutsideClick: false,
            allowEscapeKey:false,
            allowEnterKey:false,
            confirmButtonText: 'Continuar'
          }).then((result) => {
            this.router.navigate(['/dashboard/profile']);
          })

          
         
         }else{
          Swal.fire({
            title: data[1],
            icon: 'error',
            allowOutsideClick: false,
            allowEscapeKey:false,
            allowEnterKey:false,
            confirmButtonText: 'Continuar'
          })
         }
        },
        error => {
          console.log("Error al cambiar contraseña");
        });
    }

  
  ngOnInit(): void {
  }

    
}

