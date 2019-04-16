import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {BodyComponent} from './body/body.component';
import { HomeComponent } from './body/home/home.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'app',
  component: BodyComponent,
  canActivate: [AuthGuardService],
  children: [
        {path: 'home', component: HomeComponent }
        ]
  }
];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
