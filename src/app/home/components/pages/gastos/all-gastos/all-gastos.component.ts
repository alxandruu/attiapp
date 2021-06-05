import { Component, OnInit } from '@angular/core';
import { Gastos } from 'src/app/_interfaces/gastos.interfaces';
import { GananciasService } from '../../ganancias/services/ganancias.service';
import { GastosService } from '../services/gastos.service';

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

}
