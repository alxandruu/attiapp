import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AdministrarService } from '../services/administrar.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  categories;
  catForm: FormGroup;

  constructor(private amn: AdministrarService, private fb: FormBuilder) {
    this.catForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories() {
    this.amn.getCategories().subscribe(data => {
      this.categories = data;
      console.log(data);
    }, error => {
      console.log(error);
    })
  }
  public post() {
    if (this.catForm.valid) {

      this.amn.newCategory(this.catForm.value)
        .subscribe(
          data => {
            if (data)
              this.getCategories();
            this.catForm.setValue({
              name: ''
            })
          },
          error => {
            console.log(error);
          }
        )
    }
  }
  public delCat(data) {
    if (data.relaciones == '0') {
      this.amn.delCategory(data.id).subscribe(data => { if (data) this.getCategories(); });
    } else {
      Swal.fire({
        title: '¿Estas seguro?',
        text: `Al confirmar, borrarás la categoria [${data.nombre}] con sus ${data.relaciones} relaciones`,
        icon: 'warning',
        allowOutsideClick: false,
        allowEscapeKey: true,
        allowEnterKey: false,
        showCancelButton: true,
        confirmButtonColor: '#7dce82',
        cancelButtonColor: '#FE5F55',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.amn.delCategory(data.id)
            .subscribe(data => { if (data) this.getCategories(); });
        }
      })
    }

  }
  // FORM GETTERS
  get name() { return this.catForm.get('name') };
}
