import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { Ng2SmartTableModule } from "ng2-smart-table";
import { RouterModule, Routes } from "@angular/router";
import { ServicioService } from "./Servicios/servicio.service";

import { LoginService } from "./login/Servicios/Login.service";
import { LoginComponent } from './login/login.component';

import { AltaService } from "./alta/Servicios/Alta.service";
import { AltaComponent } from './alta/alta.component';

const appRoutes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Alta', component: AltaComponent },
]

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    AltaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule,
    RouterModule.forRoot(appRoutes),   
  ],
  providers: [
    AltaService,
    LoginService,    
    ServicioService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
