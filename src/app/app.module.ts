import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { HomeHeaderComponent } from './Vistas/Cliente/Home/Components/home-header/home-header.component';
import { MapComponent } from './Vistas/Cliente/Actividades/map/map.component';
import { HomeFooterComponent } from './Vistas/Cliente/Home/Components/home-footer/home-footer.component';
import { AdminHeaderComponent } from './Vistas/Cliente/Home/Components/admin-header/admin-header.component';
import { AdmiGruposComponent } from './Vistas/Admin/admi-grupos/admi-grupos.component';
import {HttpClient, HttpClientModule, HttpResponse} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModiCarreraComponent } from './Vistas/Admin/modi-carrera/modi-carrera.component';
import { ModiRetosComponent } from './Vistas/Admin/modi-retos/modi-retos.component';
import { SubsCarreraComponent } from './Vistas/Atleta/subs-carrera/subs-carrera.component';
import {DatePipe} from '@angular/common';
import {MessengerService} from './MessengerService';
import { CardActividadComponent } from './Vistas/Atleta/card-actividad/card-actividad.component';
import { CrearRetosComponent } from './Vistas/Admin/crear-retos/crear-retos.component';
import { CrearCarrerasComponent } from './Vistas/Admin/crear-carreras/crear-carreras.component';
import { ActualizarGrupoComponent } from './Vistas/Admin/actualizar-grupo/actualizar-grupo.component';
import { ActividadesGrupoComponent } from './Vistas/Atleta/actividades-grupo/actividades-grupo.component';
import { MisCarrerasComponent } from './Vistas/Atleta/mis-carreras/mis-carreras.component';
import { GestionSolicitudesComponent } from './Vistas/Admin/gestion-solicitudes/gestion-solicitudes.component';
import {MESSENGER_SERVICE} from './MessengerService';
import { CrearGruposComponent } from './Vistas/Admin/crear-grupos/crear-grupos.component';
import { CarrerasGrupoComponent } from './Vistas/Atleta/carreras-grupo/carreras-grupo.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeHeaderComponent,
    MapComponent,
    AdminHeaderComponent,
    AdmiGruposComponent,
    HomeFooterComponent,
    ModiCarreraComponent,
    ModiRetosComponent,
    SubsCarreraComponent,
    ActualizarGrupoComponent,
    ActividadesGrupoComponent,
    MisCarrerasComponent,
    GestionSolicitudesComponent,
    CardActividadComponent,
    CrearCarrerasComponent,
    CrearRetosComponent,
    CrearGruposComponent,
    CarrerasGrupoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [MessengerService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
