import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
  path: '',
  component: LoginComponent,
  pathMatch: 'full'
},
{
  path: 'dashboard',
  component: DashboardComponent,
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
