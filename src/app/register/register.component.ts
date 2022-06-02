import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { User } from '../clases/user';
import { LoginService } from '../services/login.service';

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

    this.loginservice.save(this.user).subscribe((data) => {


      if (data == "guardado") {
        console.log("si")
        this.router.navigate(["/", "home"]).then(() => {
          window.location.reload();
        });


      } else {
this.userForm.setValue({'name':'','password':''})
this.loginFailed=true
        console.log("no funciona")

      }

    })


  }


  ngOnInit(): void {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {

      }
    })
  }
}
