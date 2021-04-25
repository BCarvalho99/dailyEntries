import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  horarios: any[] = [];
  horariosPromise: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor() {}

  ngOnInit(): void {}

  recebeDados(dados: any) {
    this.horarios.push(dados);
    this.horariosPromise.next(this.horarios);
  }
}
