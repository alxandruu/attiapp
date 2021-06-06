import { Component, OnInit } from '@angular/core';
import { GananciasService } from '../services/ganancias.service';

@Component({
  selector: 'app-ganancias-index',
  templateUrl: './ganancias-index.component.html',
  styleUrls: ['./ganancias-index.component.scss']
})
export class GananciasIndexComponent implements OnInit {
  ganancias;
  constructor(private gs: GananciasService) { }

  ngOnInit(): void {
    this.gs.getGanancias().subscribe(data => { this.ganancias = data; });
  }


  calcGananciasXCategoria(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      let price = parseFloat(data[i]["price"]);
      total += price;
    }
    return total;
  }
  total() {
    let total = 0;
    let ganancias = this.ganancias;
    if (ganancias)
      ganancias.map(categoria => {
        categoria.data.map(gananacia => {
          let price = parseFloat(gananacia["price"]);
          total += price;
        })
      });
    return total.toFixed(2);
  }
  public moreGanancias(data) {
    this.gs.moreGanancias(data);

  }
}
