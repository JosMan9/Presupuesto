import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.module';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.module';
import { IngresoService } from '../ingreso/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  tipo: string = 'ingresoOp';
  descripcionInput: string = '';
  valorInput: number;

  constructor(
    private egresoServicio: EgresoService,
    private ingresoServicio: IngresoService
  ) {}

  ngOnInit(): void {}

  tipoOperacion(event) {
    this.tipo = event.target.value;
  }

  agregarValor() {
    if (this.tipo == "ingresoOp") {
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    } else {
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
    }
  }
}
