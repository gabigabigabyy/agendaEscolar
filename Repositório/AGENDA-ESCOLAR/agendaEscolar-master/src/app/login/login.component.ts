import { SignInData } from './../models/signData';
import { AutenticacaoService } from './../service/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private autenticacaoService: AutenticacaoService) { }

  ngOnInit(): void {

    
  }

  onSubmit(signInForm: NgForm){
    const signInData:any = new SignInData(signInForm.value.email, signInForm.value.password)
   this.autenticacaoService.autenti(signInData)
  }

}
