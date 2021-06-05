import { Pipe, PipeTransform } from '@angular/core';
import { Gastos } from 'src/app/_interfaces/gastos.interfaces';
import { filter } from 'rxjs/operators';
@Pipe({
  name: 'gastoFilter'
})
export class GastoFilterPipe implements PipeTransform {

  transform(gastos: Gastos[], page: number = 0, buscar: number = 0): Gastos[] {
    console.log(gastos);
    if (buscar == 0) {
      return gastos.slice(page, page + 10);
    } else {  
      const filterGastos = gastos.filter(g => {    
        return (g.id_cat == buscar)?true:false;
      });      
      return filterGastos.slice(page, page + 10);
    }
  }


}
