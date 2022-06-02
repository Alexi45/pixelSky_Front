import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './services/login.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { RegisterComponent } from './register/register.component';

import { MenuComponent } from './barra-Navegacion/barra-Navegacion.component';

import { FooterComponent } from './footer/footer.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ScoresUsersComponent } from './scores-users/scores-users.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home/home.component';
import { EdicionDeUserComponent } from './vistas/edicion-de-user/edicion-de-user.component';
import { Easteregg1Component } from './easteregg1/easteregg1.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    Pagina404Component,
    RegisterComponent,
    NosotrosComponent,
    InformacionComponent,
    ScoresUsersComponent,
    PerfilUserComponent,
    PerfilComponent,
    HomeComponent,
    EdicionDeUserComponent,
    Easteregg1Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
