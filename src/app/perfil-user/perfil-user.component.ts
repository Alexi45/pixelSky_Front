import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../modelos/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.component.html',
  styleUrls: ['./perfil-user.component.css']
})
export class PerfilUserComponent implements OnInit {


 name:string
  user: User = new User();
    currentUser: any;
    activatedRoute: any;

  constructor(private loginService: LoginService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.loginService.getUser(this.name).subscribe(
      data => {
        this.user = data;
  }
    )}

    public volver_Scores():void{


 this.router.navigate(["/", "scores"])

    }
}
