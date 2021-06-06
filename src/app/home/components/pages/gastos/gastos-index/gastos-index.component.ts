import { Component, OnInit } from '@angular/core';
import { GastosService } from '../services/gastos.service';

@Component({
  selector: 'app-gastos-index',
  templateUrl: './gastos-index.component.html',
  styleUrls: ['./gastos-index.component.scss']
})
export class GastosIndexComponent implements OnInit {

  categorias;
  constructor(private gastosService: GastosService) { }

  ngOnInit(): void {
    this.getGastos();
  }


  private getGastos() {
    this.gastosService.getGastos().subscribe(
      data => {
        this.categorias = data;

      },
      error => {
        console.log(error);
      }
    );
  }

  public totalPrice(data) {
    let i = 0;
    let resultado = 0;
    for (i = 0; i < data.length; i++) {
      resultado = parseFloat(data[i].price) + resultado;
    }
    return resultado;
  }

  public total() {
    let total = 0;
    if (this.categorias)
      this.categorias.map(categoria => {
        categoria.data.map(gasto => {
          let price = parseFloat(gasto["price"]);
          total += price;
        })
      });
    return total.toFixed(2);
  }

  public moreGastos(data) {
    this.gastosService.moreGastos(data);
  }

}