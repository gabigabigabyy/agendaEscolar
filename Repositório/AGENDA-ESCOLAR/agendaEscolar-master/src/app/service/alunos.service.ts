import { Aluno } from './../models/aluno';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private readonly API =  'http://localhost:3000/alunos';

 
  constructor(private httpClient: HttpClient) {  }

  list(){
    return this.httpClient.get<Aluno[]>(this.API);
}

}