import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
})
export class HistoricoComponent implements OnInit {
  displayedColumns: string[] = ['entrada', 'saida'];

  @Input() historicoHorarios: any;

  constructor() {}

  ngOnInit(): void {}
}
