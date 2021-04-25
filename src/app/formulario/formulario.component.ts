import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalAlertComponent } from '../modal-alert/modal-alert.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  entrada: any;
  saida: any;

  @Output() ponte = new EventEmitter<any>();

  constructor(private _snackBar: MatSnackBar) {
    this.entrada = null;
    this.saida = null;
  }

  ngOnInit(): void {}

  enviaDado(): any {
    if (this.entrada && this.saida) {
      this.ponte.emit({ entrada: this.entrada, saida: this.saida });
      this._snackBar.openFromComponent(ModalAlertComponent, {
        duration: 5 * 1000,
        verticalPosition: 'top',
        panelClass: 'back',
      });
    }
  }
}
