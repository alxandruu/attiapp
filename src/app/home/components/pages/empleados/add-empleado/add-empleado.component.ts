import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../services/empleado.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.scss']
})
export class AddEmpleadoComponent implements OnInit {
  empleadoForm: FormGroup;
  title: String = 'Añadir Empleado';
  constructor(private fb: FormBuilder, private empleadoService: EmpleadoService, private route: ActivatedRoute, private router: Router) {

    if (this.empleadoService.emp) {
      this.title = 'Editar Empleado';
      let emp = this.empleadoService.emp;
      this.empleadoForm = this.fb.group({
        id: [emp.id],
        name: [emp.name, [Validators.required, Validators.minLength(2)]],
        surname: [emp.surname, [Validators.required, Validators.minLength(2)]],
        dni: [emp.dni, [Validators.required]],
        salary: [emp.salary, [Validators.required, Validators.min(0)]],
        telf: [emp.phone_number, [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
        position: [emp.position, [Validators.required]]
      });
    } else {
      this.empleadoForm = this.fb.group({
        id: ['0'],
        name: ['', [Validators.required, Validators.minLength(2)]],
        surname: ['', [Validators.required, Validators.minLength(2)]],
        dni: ['', [Validators.required]],
        salary: ['', [Validators.required, Validators.min(0)]],
        telf: ['', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
        position: ['', [Validators.required]]
      });
    }
    this.empleadoService.emp = null;
  }

  ngOnInit(): void {

  }

  public postEmpleadoForm() {
    if (this.empleadoForm.valid) {
      this.empleadoService.addEmployee(this.empleadoForm.value)
        .subscribe(
          data => {
            if (data[0] == true) {
              Swal.fire({
                title: data[1],
                icon: 'success',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                confirmButtonText: 'Continuar'
              }).then((result) => {
                this.router.navigate(['/dashboard/empleados']);
              })
            } else {
              Swal.fire({
                title: "Revise el formulario",
                text: data[1],
                icon: 'error',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                confirmButtonText: 'Continuar'
              })
            }
          },
          error => {
            Swal.fire({
              title: "Ups! hubo un error inesperado",
              text: "Algo ha ido mal!",
              icon: 'error',
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false,
              confirmButtonText: 'Continuar'
            })
          }
        );
    } else {
      Swal.fire({
        title: "Revisa el formulario",
        text: "Los campos del formulario están mal rellenados",
        icon: 'error',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        confirmButtonText: 'Aceptar'
      })
    }
  }


  // FORM GETTERS
  get name() { return this.empleadoForm.get('name') };
  get surname() { return this.empleadoForm.get('surname') };
  get dni() { return this.empleadoForm.get('dni') };
  get salary() { return this.empleadoForm.get('salary') };
  get telf() { return this.empleadoForm.get('telf') };
  get position() { return this.empleadoForm.get('position') };

}