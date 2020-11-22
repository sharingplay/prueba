import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-gestion-miembros-grupo',
  templateUrl: './gestion-miembros-grupo.component.html',
  styleUrls: ['./gestion-miembros-grupo.component.scss']
})
export class GestionMiembrosGrupoComponent implements OnInit {
  deportistas: any;
  admin: any;
  grupo: any;
  flag = true;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService,
              @Inject(MessengerService) public recibido: MessengerService['usuario']) {
    this.admin = recibido.usuario;
    this.messengerService.message.subscribe(value => {this.grupo = value; });
    this.httpService.post('http://localhost/APIStraviaTec/Grupo/usersInGroup', { idgrupo: this.grupo.idgrupo}).subscribe(
      (resp: HttpResponse<any>) => { this.deportistas = resp; console.log(resp); });
  }
  ngOnInit(): void {
  }
  borrarDeportista(deportista: any): void{
    this.httpService.post('http://localhost/APIStraviaTec/Grupo/deleteUser',
      { idusuario: deportista.idusuario, idgrupo: this.grupo.idgrupo}).subscribe(
      (resp: HttpResponse<any>) => { const ans = resp; console.log(resp); });
  }

  setFlag(): void{
    this.flag = false;
  }

}
