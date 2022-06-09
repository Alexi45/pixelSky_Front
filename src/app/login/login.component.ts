import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router, NavigationStart } from '@angular/router';
import { NgModule } from '@angular/core';
import { User } from 'src/app/clases/user';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import swal from'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public texto: String
  public user: User
  public userForm:FormGroup
  public loginFailed: boolean = false
  constructor(private loginservice: LoginService, private router: Router) {

    this.userForm= new FormGroup({name:new FormControl(''),password:new FormControl('')})
    this.user = new User()
    this.user.name = "alex"
    this.user.password = "abas"
    this.texto = ""

  }

  public iniciarSession(): void {

    this.user.name=this.userForm.get('name')?.value
    this.user.password=this.userForm.get('password')?.value

if(this.validarUsername() && this.validarPassword()){


    this.loginservice.login(this.user).subscribe((data) => {

      if (data == "funciono") {
        console.log("si")

        localStorage.setItem('nombreUsuario', this.userForm.get('name')?.value);
        localStorage.setItem('miTokenPersonal', `${data}`);


        swal.fire('Inicio de sesion exitoso', '', 'success').then(() =>{
          this.router.navigate(['/home']).then(()=>{
            window.location.reload()
          })

        })



      } else {
      this.userForm.setValue({'name':'','password':''})
      swal.fire('Datos incorrectos', '', 'error')
      this.loginFailed=true
      console.log("no funciona")

      }

    })

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
    } else {
      alertZ!.innerText = "";
      return true;
    }


  }

  validarPassword() {
    var alertZ = document.getElementById('passwordError');
    if ((<HTMLButtonElement>document.getElementById('password')).value.length == 0) {
      alertZ!.innerText = "Debes completar este campo*";
    } else {
      alertZ!.innerText = "";
      return true;
    }


  }


}
