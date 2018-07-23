import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './Componentes/home/home.component';
import { CardsUsuarioComponent } from './Componentes/cards-usuario/cards-usuario.component';
import { CardsAutorComponent } from './Componentes/cards-autor/cards-autor.component';
import { CardsLibroComponent } from './Componentes/cards-libro/cards-libro.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BarraSuperiorComponent } from './Componentes/barra-superior/barra-superior.component';
import {MatIconModule} from '@angular/material/icon';
import { PeticionTransferenciaComponent } from './Componentes/peticion-transferencia/peticion-transferencia.component';
import { SeleccionTransferenciaComponent } from './Componentes/seleccion-transferencia/seleccion-transferencia.component';
import { PerfilComponent } from './Componentes/perfil/perfil.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {Router, RouterModule} from "@angular/router";
import {routes} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CardsUsuarioComponent,
    CardsAutorComponent,
    CardsLibroComponent,
    BarraSuperiorComponent,
    PeticionTransferenciaComponent,
    SeleccionTransferenciaComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,
      {
        useHash: true}),
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
