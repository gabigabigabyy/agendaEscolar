import { SignInData } from './../models/signData';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

private readonly mockedUser = new SignInData('admin@escola.com', 'admin123');
isAutenticacao = false;

  constructor(private router: Router) { }

  autenti(SignInData: SignInData): boolean{
    if(this.checkCredentials(SignInData)){
      this.isAutenticacao = true;
      this.router.navigate(['home']);
      return true;
    }
    this.isAutenticacao;
    return false;

  }

  private checkCredentials(signInData: SignInData):boolean{
    return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPassword())
    
  }
  private checkEmail(email:string): boolean{
    return email === this.mockedUser.getEmail()

  }
  private checkPassword(password:string):boolean{
    return password === this.mockedUser.getPassword()

  }
}
