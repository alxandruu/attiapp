import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { NavbarService } from '../../../navbar/services/navbar.service';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { UserLogedService } from 'src/app/_services/user-loged.service';
declare var $: any;

@Component({
  selector: 'app-change-photo',
  templateUrl: './change-photo.component.html',
  styleUrls: ['./change-photo.component.scss']
})
export class ChangePhotoComponent implements OnInit {
  actimg: string;
  newimg: string = '../../../../../../assets/img/users/default.jpg';
  imgForm: FormGroup;
  constructor(private userLoged: UserLogedService, private fb: FormBuilder, private profileService: ProfileService, private router: Router) {
    this.imgForm = this.fb.group({
      img: [''],
      fileSource: ['']
    })
  }

  ngOnInit(): void {
    this.setURLActualImage();
  }

  private setURLActualImage(): void {
    this.userLoged.userinfo
      .subscribe(
        data => {
          let img: string = (data["img_profile"] == '') ? 'default.jpg' : data["img_profile"];
          this.actimg = '../../../../assets/img/users/' + img;
        },
        error => {
          console.log("Error al obtener la imágen actual.");
        });;
  }
  public changeImage() {
    this.profileService.changeIMG(this.imgForm.value)
      .subscribe(
        res => {
          console.log(res);
          Swal.fire({
            title: 'Foto cambiada con éxito!',
            icon: 'success',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            confirmButtonText: 'Continuar'
          }).then((result) => {
            this.router.navigate(['/dashboard/profile']);
            window.location.reload();
          })

        },
        error => {
          console.log(error);
        });
  }

  public changeNewImg(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;


      reader.readAsDataURL(file);

      reader.onload = () => {
        this.newimg = reader.result as string;
        this.imgForm.patchValue({
          fileSource: reader.result
        });

      };

    }
  }


}

