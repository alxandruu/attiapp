import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Empleado } from 'src/app/_interfaces/empleados.interfaces';


@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(empleados: Empleado[], page: number = 0, buscar: string = ''): Empleado[] {

    if (buscar.length === 0) {
      return empleados.slice(page, page + 8);
    } else {  
      const filterEmpleados = empleados.filter(empleado => {
        let nombre = empleado.name + ' ' + empleado.surname;
        return nombre.includes(buscar);
      });      
      return filterEmpleados.slice(page, page + 8);
    }



  }

}
