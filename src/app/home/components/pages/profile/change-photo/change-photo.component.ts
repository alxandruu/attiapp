import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { NavbarService } from '../../../navbar/services/navbar.service';
import { ProfileService } from '../services/profile.service';
import * as $ from "jquery";
declare var $:any;

@Component({
  selector: 'app-change-photo',
  templateUrl: './change-photo.component.html',
  styleUrls: ['./change-photo.component.scss']
})
export class ChangePhotoComponent implements OnInit {
  actimg: string;
  newimg: string = '../../../../../../assets/img/users/default.jpg';
  imgForm: FormGroup;
  constructor(private navbarService: NavbarService, private fb: FormBuilder, private profileService: ProfileService) {
    this.imgForm = this.fb.group({
      img: [''],
      fileSource: ['']
    })
  }

  ngOnInit(): void {
    this.setURLActualImage();
  }

  private setURLActualImage(): void {
    this.navbarService.getUserInfo()
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
        
          $('#exampleModalCenter').modal('show');
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

  hide(){
    $('#exampleModalCenter').modal('hide');
  }
}

