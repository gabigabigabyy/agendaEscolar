import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  url = 'http://localhost:3000/alunos';

  constructor(private httpClient: HttpClient) {  
   }

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })

  }

  getAluno():Observable<Aluno[]>{
    return this.httpClient.get<Aluno[]>(this.url + '/id' )
            
  }
   getAlunoId(id:string):Observable<Aluno>{
    return this.httpClient.get<Aluno>(this.url + '/id')

  }
  adicionarAluno(aluno : Aluno):Observable<Aluno>{
    return this.httpClient.post<Aluno>(this.url, JSON.stringify(aluno), this.httpOptions)
  }
  atualizarAluno(aluno: Aluno): Observable<Aluno>{
    return this.httpClient.put<Aluno>(this.url + aluno.id, JSON.stringify(aluno), this.httpOptions)
  }
  excluirAluno(aluno: Aluno) {
    return this.httpClient.delete<Aluno>(this.url + aluno.id, this.httpOptions) 
  }
    
}
