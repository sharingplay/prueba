import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-modi-retos',
  templateUrl: './modi-retos.component.html',
  styleUrls: ['./modi-retos.component.scss']
})
export class ModiRetosComponent implements OnInit {
  reto: any;
  modify: boolean;
  admin: any;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService,
              @Inject(MessengerService) public recibido: MessengerService['usuario']) {
    this.admin = recibido.usuario;
    this.messengerService.message.subscribe(value => {this.reto = value; });
  }
  modificar(): void{
    let bool = true;
    if ((document.getElementById('privacidad') as HTMLInputElement).value === 'true'){
      bool = true;
    }
    else{
      bool = false;
    }
    console.log(this.admin);
    const reto = {
      Idreto: this.reto.idReto,
      Idorganizador: this.admin.idusuario,
      Nombrereto: (document.getElementById('name') as HTMLInputElement).value,
      Objetivoreto: (document.getElementById('objetivo') as HTMLInputElement).value,
      Fechainicio: (document.getElementById('inicioDate') as HTMLInputElement).value,
      Fechafinaliza: (document.getElementById('finaldate') as HTMLInputElement).value,
      Tipoactividad: (document.getElementById('tipo') as HTMLInputElement).value,
      Tiporeto: (document.getElementById('Reto') as HTMLInputElement).value,
      Privada: bool
    };
    this.httpService.post('http://localhost/APIStraviaTec/Retos/updateReto',
      reto).subscribe(
      (resp: HttpResponse<any>) => { console.log(resp); alert('Reto modificado correctamente')});
  }
  ngOnInit(): void {
  }

}
