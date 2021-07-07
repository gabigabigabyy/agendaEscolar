import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './infra/footer/footer.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { NavComponent } from './infra/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AtividadesComponent } from './atividades/atividades.component';
import { BilhetesComponent } from './bilhetes/bilhetes.component';
import { AcompanhamentoComponent } from './acompanhamento/acompanhamento.component';
import { MensagemComponent } from './mensagem/mensagem.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AtividadesComponent,
    BilhetesComponent,
    AcompanhamentoComponent,
    MensagemComponent
    
  ],
  imports: [
    BrowserModule,
    MdbCheckboxModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule
    
 
    
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA
  ],
  
})
export class AppModule { }
