import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Pagina404Component } from './pagina404/pagina404.component';

import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ScoresUsersComponent } from './scores-users/scores-users.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { MenuComponent } from './barra-Navegacion/barra-Navegacion.component';
import { InformacionComponent } from './informacion/informacion.component';
import { FooterComponent } from './footer/footer.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home/home.component';
import { Easteregg1Component } from './easteregg1/easteregg1.component';
import { EdicionDeUserComponent } from './vistas/edicion-de-user/edicion-de-user.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'egg1', component: Easteregg1Component },

  { path: 'perfilUser', component: PerfilComponent },
  { path: 'perfil/:id', component: EdicionDeUserComponent },
  { path: 'scores', component: ScoresUsersComponent },
  { path: 'userProfile/:name', component: PerfilUserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: Pagina404Component }
];
@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
