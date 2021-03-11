import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { CrearFacturaComponent } from './facturas/crear-factura/crear-factura.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearClienteComponent,
    CrearFacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Modelo 'antiguo'
    ReactiveFormsModule // Modelo actual
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
