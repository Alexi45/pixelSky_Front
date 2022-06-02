import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { User } from '../clases/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-scores-users',
  templateUrl: './scores-users.component.html',
  styleUrls: ['./scores-users.component.css']
})
export class ScoresUsersComponent implements OnInit {
  public texto: String
  users: User[] = [];
  public user: User
  public userForm:FormGroup
  public loginFailed: boolean = false
  toastr: any;
 name: string;
  constructor(private loginservice: LoginService, private router: Router) {
    this.userForm= new FormGroup({name:new FormControl(''),password:new FormControl('')})
    this.user = new User()

  }

    cargarUsuarios(): void {
      this.loginservice.lista().subscribe(
        data => {
          this.users = data;
        },
        err => {
          console.log(err);
        }
      );
    }

    perfilUser(name: string){
      this.router.navigate(['userProfile', name]);
    }

    ngOnInit(): void {
  this.cargarUsuarios();

      this.router.events.subscribe(event => {



        if (event instanceof NavigationStart) {

        }
      })
    }

    dele(id: number) {
      this.loginservice.delete(id).subscribe(
        data => {

          this.cargarUsuarios();



        }
       ); window.location.reload();
        }


}
