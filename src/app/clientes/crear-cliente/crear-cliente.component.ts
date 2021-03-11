import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  cliente: any;

  constructor() { }

  ngOnInit(): void {
  }

  crearCliente(formCliente) {
    this.cliente = {
      nombre: formCliente.controls.nombre.value,
      cif: formCliente.controls.cif.value,
      email: formCliente.controls.email.value
    }
  }

}
