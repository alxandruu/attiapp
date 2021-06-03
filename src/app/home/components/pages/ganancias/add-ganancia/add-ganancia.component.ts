import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { GananciasService } from '../services/ganancias.service';

@Component({
  selector: 'app-add-ganancia',
  templateUrl: './add-ganancia.component.html',
  styleUrls: ['./add-ganancia.component.scss']
})
export class AddGananciaComponent implements OnInit {
  gananciaForm: FormGroup;
  categories;
  constructor(private gananciaService:GananciasService, private fb:FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.gananciaForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      date: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      id_cat: ['', [Validators.required]],
    });
    this.getCategories();
  }


  private getCategories(){
    this.gananciaService.getCategories().subscribe(
      data=> {
        this.categories = data;
      },
      
      error => {
        console.log("Hubo un error al extraer categorias");
      }
    )
  }
  public postGananciaForm() {
    if (this.gananciaForm.valid) {
      this.gananciaService.addGanancia(this.gananciaForm.value)
        .subscribe(
          data => {
            if (data[0] == true) {
              Swal.fire({
                title: data[1],
                icon: 'success',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                confirmButtonText: 'Continuar'
              }).then((result) => {
                this.router.navigate(['/dashboard/ganancias']);
              })
            }
          },
          error => {
            // Swal.fire({
            //   title: "Ups! hubo un error inesperado",
            //   text: "Algo ha ido mal!",
            //   icon: 'error',
            //   allowOutsideClick: false,
            //   allowEscapeKey: false,
            //   allowEnterKey: false,
            //   confirmButtonText: 'Continuar'
            // })
          }
        );
    } else {
      Swal.fire({
        title: "Revisa el formulario",
        text: "Los campos del formulario están mal rellenados",
        icon: 'error',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        confirmButtonText: 'Aceptar'
      })
    }
  }


  // FORM GETTERS
  get title() { return this.gananciaForm.get('title') };
  get date() { return this.gananciaForm.get('date') };
  get price() { return this.gananciaForm.get('price') };
  get id_cat() { return this.gananciaForm.get('id_cat') };

}
