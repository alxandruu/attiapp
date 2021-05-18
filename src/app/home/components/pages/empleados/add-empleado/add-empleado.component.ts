import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpleadoService } from '../services/empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.scss']
})
export class AddEmpleadoComponent implements OnInit {
  empleadoForm: FormGroup;
  constructor(private fb: FormBuilder, private empleadoService: EmpleadoService) { 
    this.empleadoForm = this.fb.group({
      name: [''],
      surname: [''],
      dni: [''],
      salary: [''],
      telf: [''],
      position: ['']
    });
  }

  ngOnInit(): void {
  }

  public postEmpleadoForm(){
    this.empleadoService.addEmployee(this.empleadoForm.value)
    .subscribe(
      data => {      
        if(data==true){
          Swal.fire({
            title: "Empleado agregado correctamente",
            icon: 'success',
            allowOutsideClick: false,
            allowEscapeKey:false,
            allowEnterKey:false,
            confirmButtonText: 'Continuar'
          })
        }
       
      },
      error => {
        console.log(error)
      }
    );
  }

}
