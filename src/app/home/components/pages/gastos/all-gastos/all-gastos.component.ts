import { Component, OnInit } from '@angular/core';
import { Gastos } from 'src/app/_interfaces/gastos.interfaces';
import { GastosService } from '../services/gastos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-gastos',
  templateUrl: './all-gastos.component.html',
  styleUrls: ['./all-gastos.component.scss']
})
export class AllGastosComponent implements OnInit {
  gastos: Gastos[] = [{
    id: null, name: null, price: null, id_cat: null, date: null, categoria: null
  }];

  categorias;
  public page: number = 0;
  public buscar: number = 0;
  constructor(private gastoService: GastosService) {
      if(this.gastoService.id_cat)
        this.buscar  = this.gastoService.id_cat;
        this.gastoService.id_cat = 0;
   }

   

  ngOnInit(): void {

    this.getCats();
    this.getGastos();

  }


  private getCats() {
    this.gastoService.getCategories().subscribe(
      data => {
        this.categorias = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  private getGastos() {
    this.gastoService.getAllGasto().subscribe(
      data => {
        this.gastos = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  public filtrarGasto(value){
    this.page = 0; 
    this.buscar = value;
  }
  public prevPage() {
    if (this.page > 0)
      this.page -= 10;

  }
  public nextPage() {
    this.page += 10;
  }

  public delete(id){
    Swal.fire({
      title: '¿Estas seguro?',
      text: `Al confirmar, el gasto con ID [${id}] será eliminado`,
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
        this.gastoService.deleteGasto(id)
          .subscribe(
            data => {
              if (data === true) {
                Swal.fire({
                  title: "Gasto eliminado correctamente",
                  icon: 'success',
                  allowOutsideClick: false,
                  allowEscapeKey: false,
                  allowEnterKey: false,
                  confirmButtonText: 'Aceptar',
                  confirmButtonColor: '#7dce82',
                });
                this.getGastos();
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
