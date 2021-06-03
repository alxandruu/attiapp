import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Ganancias } from 'src/app/_interfaces/ganancias.interfaces';


@Pipe({
  name: 'fganancia'
})
export class FiltroPipeGanancia implements PipeTransform {

  transform(ganancias: Ganancias[], page: number = 0, buscar: number = 0): Ganancias[] {
    if (buscar == 0) {
      return ganancias.slice(page, page + 10);
    } else {  
      const filterGanancias = ganancias.filter(g => {    
        return (g.id_cat == buscar)?true:false;
      });      
      return filterGanancias.slice(page, page + 10);
    }
  }

}
