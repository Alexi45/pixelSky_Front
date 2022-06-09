import { Component, OnInit } from '@angular/core';
import swal from'sweetalert2';
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
      swal.fire('Has cerrado sesión satisfactoriamente', '', 'success').then(() =>{

          window.location.reload()

      })
    }
  }







}
