import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../modelos/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
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
    updateUser(id: number){
      this.router.navigate(['perfil', id]);
    }
}
