import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { FooterComponent } from './Footer/footer.component';

import { AboutComponent } from './About/about.component';
import { HomeComponent } from './Home/home.component'
import { RouterModule } from '@angular/router';
import { routes } from './app.router';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent


    
    
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash :true})
    
  
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent,NavbarComponent,FooterComponent,HomeComponent,AboutComponent,RouterModule]
})
export class AppModule { }
