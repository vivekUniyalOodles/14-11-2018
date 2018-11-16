import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [

  // { path: 'dashboard', component: DashboardComponent },

  { path: '', component:LoginComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent ,canActivate: [AuthGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent,canActivate: [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard],  
    children: [
      {path: '', component: HomeComponent},       
      {path: 'contact', component: ContactComponent }, 
    ]
  },

  { path: '**', component: LoginComponent}//,canActivate: [AuthGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents =[LoginComponent, RegisterComponent, DashboardComponent, ContactComponent, HomeComponent,ForgotPasswordComponent]
