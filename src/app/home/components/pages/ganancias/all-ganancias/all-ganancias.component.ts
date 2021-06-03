import { Component, OnInit } from '@angular/core';
import { GananciasService } from '../services/ganancias.service';
import { Ganancias } from 'src/app/_interfaces/ganancias.interfaces';

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
    if(this.gs.id_cat)
      this.buscar  = this.gs.id_cat;
      this.gs.id_cat = 0;
   }

  ngOnInit(): void {
    this.getEmpleados();
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

  private getEmpleados() {
    this.gs.getAllGanancias().subscribe(
      data => {
        this.ganancias = data;
        console.log(data);
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
  public onChangeBuscar(value){
    this.page = 0; 
    this.buscar = value;
  }
}
