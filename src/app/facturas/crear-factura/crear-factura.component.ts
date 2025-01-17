import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateCif } from 'src/app/validators/cif.validator';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {

  formFra: FormGroup;
  importeIVA: number = 0;
  totalFra: number = 0;
  
  constructor() { }

  ngOnInit(): void {
    this.formFra = new FormGroup({
      cliente: new FormControl('', [Validators.required, Validators.minLength(4)]),
      cif: new FormControl('', [ValidateCif]),
      fecha: new FormControl((new Date()).toISOString().substring(0,10)),
      baseImponible: new FormControl(0),
      tipoIVA: new FormControl(0.21),
      // importeIVA: new FormControl(0),
      // totalFra: new FormControl(0)
    })
    this.actualizarFra()
  }

  actualizarFra() {
    this.formFra.valueChanges.subscribe(objetoForm => {
      // this.formFra.get('importeIVA').patchValue(objetoForm.baseImponible * objetoForm.tipoIVA, {emitEvent: false} );
      // this.formFra.get('totalFra').patchValue(objetoForm.baseImponible + objetoForm.baseImponible * objetoForm.tipoIVA, {emitEvent: false} );
      this.importeIVA = objetoForm.baseImponible * objetoForm.tipoIVA;
      this.totalFra = objetoForm.baseImponible + objetoForm.baseImponible * objetoForm.tipoIVA;
    })
  }

}
