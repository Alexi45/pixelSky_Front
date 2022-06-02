import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/clases/user';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-edicion-de-user',
  templateUrl: './edicion-de-user.component.html',
  styleUrls: ['./edicion-de-user.component.css']
})
export class EdicionDeUserComponent implements OnInit {
  id: number;
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
    this.loginService.update(this.id, this.user).subscribe(
      data => {
        window.alert("Usuario Actualizado")
        this.router.navigate(['/home']);
      }
      );
    }

}
