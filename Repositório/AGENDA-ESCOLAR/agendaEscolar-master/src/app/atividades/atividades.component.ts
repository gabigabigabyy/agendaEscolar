import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})


export class AtividadesComponent implements OnInit {
  
  name: string | undefined;
  position: number | undefined;
  weight: number | undefined;
  symbol: string | undefined;
  displayedColumns: string[] = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'];
  displayedColumns2: string[] = ['nomeAluno', 'diaAniver'];
  dataSource = ELEMENT_DATA;
  dataSource2 = ELEMENT_DATA2;
    constructor() { }

  ngOnInit(): void {
  }

}
 
export interface AniverElement {
  nomeAluno:any
  diaAniver:any
}
export interface PeriodicElement {
  terca: any;
  segunda: any;
  quarta: any;
  quinta: any;
  sexta:any;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {segunda: 'Dia do Lanche Coletivo', terca: 'Dia do Livro', quarta:'Dia da Fruta', quinta: 'Dia do Cinema', sexta:'Dia do Brinquedo e da Guloseima'},
  
];
const ELEMENT_DATA2:AniverElement[] = [
  {nomeAluno: 'Théo Fucks', diaAniver: '03/09/2021'},
  
];
