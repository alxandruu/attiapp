import { Component, OnInit } from '@angular/core';
import { GananciasService } from '../services/ganancias.service';
import { Ganancias } from 'src/app/_interfaces/ganancias.interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-ganancias',
  templateUrl: './all-ganancias.component.html',
  styleUrls: ['./all-ganancias.component.scss']
})
export class AllGananciasComponent implements OnInit {
  ganancias: Ganancias[] = [{
    id: null, name: null, date: null, price: null, id_cat: null, categoria: null
  }];
  categories;
  public page: number = 0;
  public buscar: number = 0;

  constructor(private gs: GananciasService) {
    if (this.gs.id_cat)
      this.buscar = this.gs.id_cat;
    this.gs.id_cat = 0;
  }

  ngOnInit(): void {
    this.getGanancias();
    this.getCategories();
  }
  private getCategories() {
    this.gs.getCategories().subscribe(
      data => {
        this.categories = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  private getGanancias() {
    this.gs.getAllGanancias().subscribe(
      data => {
        this.ganancias = data;      
      },
      error => {
        console.log(error);
      }
    );
  }

  public prevPage() {
    if (this.page > 0)
      this.page -= 10;

  }
  public nextPage() {
    this.page += 10;
  }
  public onChangeBuscar(value) {
    this.page = 0;
    this.buscar = value;
  }
  public delete(id) {
    Swal.fire({
      title: '¿Estas seguro?',
      text: `Al confirmar, la ganancia con ID [${id}] será eliminado`,
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
        this.gs.deleteGanancia(id)
          .subscribe(
            data => {
              if (data === true) {
                Swal.fire({
                  title: "Empleado eliminado correctamente",
                  icon: 'success',
                  allowOutsideClick: false,
                  allowEscapeKey: false,
                  allowEnterKey: false,
                  confirmButtonText: 'Aceptar',
                  confirmButtonColor: '#7dce82',
                });
                this.getGanancias();
              }
            },
            error => {
              console.log(error);
            }
          );
      }
    })
  }
}
