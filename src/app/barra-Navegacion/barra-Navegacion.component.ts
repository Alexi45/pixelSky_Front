import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './barra-Navegacion.component.html',
  styleUrls: ['./barra-Navegacion.component.css']
})
export class MenuComponent implements OnInit {

name: String;
  navbarOpen = false;
  public miToken: number;
  public nombreUsuario: string | null;
  router: any;

  constructor() {
    this.miToken = 0;
    this.nombreUsuario = "";
  }
  ngOnInit(): void {
    if (localStorage.getItem('miTokenPersonal')) {
      this.miToken = +localStorage.getItem('miTokenPersonal')!;
    }
    if (localStorage.getItem('miTokenPersonal')) {
      this.nombreUsuario = localStorage.getItem('nombreUsuario');
      console.log( this.nombreUsuario);
    }
  }
  public logout(): void {
    if (localStorage.getItem('miTokenPersonal')) {
      localStorage.removeItem('miTokenPersonal');
      localStorage.removeItem('nombreUsuario');
      window.alert("¡¡Has cerrado sesión satisfactoriamente!!")
        window.location.reload();
    }
  }







}
