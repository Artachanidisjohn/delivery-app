import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Login/login.component';
import { ProfileComponent } from './Components/Profile/profile.component';
import { HomeComponent } from './Components/Home/home.component';
import { AuthGuard } from './auth.guard';
import { PizzaItemComponent } from './Components/PizzaItem/pizza-item.component';

const routes: Routes = [
  {
    path: 'profile', component: ProfileComponent,
    // canActivate: [AuthGuard]
  },
  { path: '', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'pizzaItem', component: PizzaItemComponent,
    // canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
