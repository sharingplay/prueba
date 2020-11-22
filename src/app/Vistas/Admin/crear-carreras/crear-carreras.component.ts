import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-crear-carreras',
  templateUrl: './crear-carreras.component.html',
  styleUrls: ['./crear-carreras.component.scss']
})
export class CrearCarrerasComponent implements OnInit {
  carrera: any;
  admin: any;
  recorrido: any;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService,
              @Inject(MessengerService) public recibido: MessengerService['usuario']) {
    this.admin = recibido.usuario;
  }
  crear(): void{
    let bool = true;
    if ((document.getElementById('Carrera') as HTMLInputElement).value === 'true'){
      bool = true;
    }
    else{
      bool = false;
    }
    const carreraMod = {
      Idorganizador: this.admin.idusuario,
      Nombrecarrera: (document.getElementById('name') as HTMLInputElement).value,
      Fechacarrera: (document.getElementById('inicioDate') as HTMLInputElement).value,
      Tipoactividad: (document.getElementById('tipo') as HTMLInputElement).value,
      Recorrido: this.recorrido,
      Privada: bool,
      Costo: Number((document.getElementById('costo') as HTMLInputElement).value),
      Cuentabancaria: (document.getElementById('cuenta') as HTMLInputElement).value
    };
    console.log(carreraMod);
    this.httpService.post('http://localhost/APIStraviaTec/Carrera/create',
      carreraMod).subscribe(
      (resp: HttpResponse<any>) => { this.carrera = resp; console.log(resp); });
  }
  volver(): void{
    this.messengerService.setMessage(this.admin);
  }
  async nuevoRecorrido(): Promise<void>{
    this.recorrido = await this.setRecorrido();
  }

  async setRecorrido(): Promise<string> {
    const fileInput = (document.getElementById('recorrido') as HTMLInputElement);
    const files = fileInput.files[0].text();
    const result = files.then((value) => {
      return 'data:application/xml;charset=UTF-8,' + value;
    });
    return await result;
  }
  ngOnInit(): void {
  }

}
