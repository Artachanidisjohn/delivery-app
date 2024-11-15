import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/Login/login.component';
import { HomeComponent } from './Components/Home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PizzaItemComponent } from './Components/PizzaItem/pizza-item.component';
import { ProfileComponent } from './Components/Profile/profile.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, ProfileComponent, HomeComponent,PizzaItemComponent],
  imports:
    [
      BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, FormsModule, BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
