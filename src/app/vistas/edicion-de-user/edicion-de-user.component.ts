import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/modelos/user';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import swal from'sweetalert2';
@Component({
  selector: 'app-edicion-de-user',
  templateUrl: './edicion-de-user.component.html',
  styleUrls: ['./edicion-de-user.component.css']
})
export class EdicionDeUserComponent implements OnInit {
  id: number;
  ttitular: ''
  name:String;
user: User = new User();
  currentUser: any;
  activatedRoute: any;
  constructor(private loginService: LoginService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.name=localStorage.getItem('nombreUsuario');

    this.id = this.route.snapshot.params['id'];
    this.loginService.getUser(this.name).subscribe(
      data => {
        this.user = data;

      }
    )
  }
  onUpdate(): void {

if(this.validarPassword() && this.validarPhone() && this.validarUrl){


    this.loginService.update(this.id, this.user).subscribe(
      data => {

       swal.fire('Actualizacion exitosa', this.ttitular, 'success').then(() =>{
         this.router.navigate(['/home'])
       })

      }
      );}else{
        swal.fire('Error al guardar', this.ttitular, 'error')
      }
    }



    validarUrl() {
      var alertZ = document.getElementById('urlError');
      if ((<HTMLButtonElement>document.getElementById('urlPerfil')).value.length == 0) {
        alertZ!.innerText = "Debes completar este campo*";
      } else if((<HTMLButtonElement>document.getElementById('urlPerfil')).value.length < 50 ) {
        alertZ!.innerText = "Url demasiado corta*";

      }else if((<HTMLButtonElement>document.getElementById('urlPerfil')).value.length > 120){
        alertZ!.innerText = "Url demasiado extensa*";
      }else{
        alertZ!.innerText = "";
        return true;
      }


    }

    validarPhone() {
      var alertZ = document.getElementById('phoneError');
      if ((<HTMLButtonElement>document.getElementById('phone')).value.length == 0) {
        alertZ!.innerText = "Debes completar este campo*";
      } else  if((<HTMLButtonElement>document.getElementById('phone')).value.length < 8) {
        alertZ!.innerText = "Minimo 8 numeros*";

      }else if((<HTMLButtonElement>document.getElementById('phone')).value.length > 10){

        alertZ!.innerText = "Maximo 9 numeros*";

      }else{
        alertZ!.innerText = "";
        return true;
      }


    }

    validarPassword() {
      var alertZ = document.getElementById('passwordError');
      if ((<HTMLButtonElement>document.getElementById('password')).value.length == 0) {
        alertZ!.innerText = "Debes completar este campo*";
      } else if((<HTMLButtonElement>document.getElementById('password')).value.length < 8) {
        alertZ!.innerText = "Minimo 8 caracteres*";

      }else{
          alertZ!.innerText = "";
        return true;
      }


    }

}
