import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { LoginService } from 'src/app/login/services/login.service';
import { ProfileService } from '../services/profile.service';
import * as $ from "jquery";
import { Router } from '@angular/router';
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
           $('#exampleModalCenter').modal('show');
         
         }else{
          this.errChange(data);
         }
        },
        error => {
          console.log("Error al cambiar contraseña");
        });
    }

  
  ngOnInit(): void {
  }

    succes(dato) {
      /*
    $('#alertBox').html('');
    let caja;
    caja = $('<div>',{
      'class':"alert alert-success alert-dismissible fade show  d-flex",
      'role':"alert"
    }).append(
      $('<img>',{
        'src':"../../assets/icons/alert.svg",
        'class':"me-2"
      }),
      $('<span>').text(dato[1]),
      $('<button>',{
        'type':"button",
        'class':"btn-close",
        'data-bs-dismiss':"alert",
        'aria-label':"Close"
      })
    );
    $('#alertBox').append(caja);
       */
    

  }
  
  hide(){
    $('#exampleModalCenter').modal('hide');
  }
 
  errChange(dato) {
    $('#alertBox').html('');
    let caja;
    caja = $('<div>',{
      'class':"alert alert-danger alert-dismissible fade show  d-flex",
      'role':"alert"
    }).append(
      $('<img>',{
        'src':"../../assets/icons/alert.svg",
        'class':"me-2"
      }),
      $('<span>').text(dato[1]),
      $('<button>',{
        'type':"button",
        'class':"btn-close",
        'data-bs-dismiss':"alert",
        'aria-label':"Close"
      })
    );
    $('#alertBox').append(caja);
       

  }
}

