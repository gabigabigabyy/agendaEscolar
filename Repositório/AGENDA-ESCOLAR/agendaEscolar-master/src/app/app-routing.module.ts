import { MensagemComponent } from './mensagem/mensagem.component';
import { AcompanhamentoComponent } from './acompanhamento/acompanhamento.component';
import { BilhetesComponent } from './bilhetes/bilhetes.component';
import { AtividadesComponent } from './atividades/atividades.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

const APP_ROUTES: Routes = [
 {path: 'home', component: HomeComponent},
 {path: '', component: LoginComponent},
 {path: 'atividades', component: AtividadesComponent},
 {path: 'bilhetes', component: BilhetesComponent},
 {path: 'acompanhamento', component: AcompanhamentoComponent},
 {path: 'mensagem', component: MensagemComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }