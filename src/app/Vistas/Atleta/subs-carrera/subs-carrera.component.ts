import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-subs-carrera',
  templateUrl: './subs-carrera.component.html',
  styleUrls: ['./subs-carrera.component.scss']
})
export class SubsCarreraComponent implements OnInit {
  atleta: any;
  carrera: any;
  ans: any;
  imageByte: string;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService,
              @Inject(MessengerService) public recibido: MessengerService['usuario']) {
    this.atleta = recibido.usuario;
    this.messengerService.message.subscribe(value => {this.carrera = value; });
  }

  ngOnInit(): void {
  }
  sub(): void{
    this.httpService.post('http://localhost/APIStraviaTec/Afiliaciones/sendAfiliacion',
      { Idusuario: this.atleta.idusuario, Idcarrera: this.carrera.idcarrera,
        Categoria: (document.getElementById('categoria') as HTMLInputElement).value,
      Recibo: this.imageByte}).subscribe(
      (resp: HttpResponse<any>) => { this.ans = resp; console.log(resp); alert('Afiliación Enviada :)'); });
  }

  setByteArray(files): void {
    const reader = new FileReader();
    // this.profile.image = files;
    reader.readAsDataURL(files[0]);
    reader.onload = e => {
      const bytes = reader.result;
      this.imageByte = bytes.toString();
    };
  }
}
