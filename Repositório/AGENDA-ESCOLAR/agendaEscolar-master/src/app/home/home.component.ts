import { Alunos } from './../alunos';
import { AlunosService } from './../service/alunos.service';

import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/aluno';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lista:any 

  constructor( private service: AlunosService) { 
  
    
   }

  ngOnInit(): void {
    this.service.list().subscribe(dados => this.lista = dados);
        
  }

  

}
