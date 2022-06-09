import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { User } from '../clases/user';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public texto: String
  public user: User
  public userForm:FormGroup
  public loginFailed: boolean = false

  constructor(private loginservice: LoginService, private router: Router) {


    this.userForm= new FormGroup({name:new FormControl(''),password:new FormControl(''),phone:new FormControl(''),email:new FormControl('')})
    this.user = new User()
    this.user.name = ""
    this.user.password = ""
    this.texto = ""



  }



  public register(): void {

    this.user.name=this.userForm.get('name')?.value
    this.user.password=this.userForm.get('password')?.value
    this.user.email=this.userForm.get('email')?.value
    this.user.phone=this.userForm.get('phone')?.value

if(this.validarUsername() && this.validarPassword() && this.validarPhone() && this.validarMail2()){



    this.loginservice.save(this.user).subscribe((data) => {


      if (data == "guardado") {
        console.log("si")
        Swal.fire('Registro exitoso', '', 'success').then(() =>{
          this.router.navigate(['/home'])
          window.location.reload();
        })



      } else {

this.userForm.setValue({'name':'','password':''})
this.loginFailed=true
        console.log("no funciona")

      }

    })

}else{
  Swal.fire('Fallo en el registro', '', 'error')
}
  }


  ngOnInit(): void {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {

      }
    })
  }

  validarUsername() {
    var alertZ = document.getElementById('usernameError');
    if ((<HTMLButtonElement>document.getElementById('username')).value.length == 0) {
      alertZ!.innerText = "Debes completar este campo*";
    } else if((<HTMLButtonElement>document.getElementById('username')).value.length < 5 ) {
      alertZ!.innerText = "Minimo 5 caracteres*";

    }else if((<HTMLButtonElement>document.getElementById('username')).value.length > 15){
      alertZ!.innerText = "Maximo 15 caracteres*";
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

  validarMail2() {
    var alertZ = document.getElementById('emailError');
    if ((<HTMLButtonElement>document.getElementById('email')).value.length == 0) {
      alertZ!.innerText = "Debes completar este campo*";
    } else if(!this.validarEmail()) {
      alertZ!.innerText = "Formato invalido de email*";

    }else{
      alertZ!.innerText = "";
  return true;
    }


  }


  validarEmail(){

    return /\S+@\S+.\S+/.test(this.userForm.get('email')?.value);



  }
}
