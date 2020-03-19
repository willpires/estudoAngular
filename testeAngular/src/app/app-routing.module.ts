import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FotoListComponent } from './components/fotos/foto-list/foto-list.component';
import { LoginComponent } from './components/fotos/login/login.component';
import { NotFound } from './errors-module/not-found/not-found.component';


const routes: Routes = [
  { path:'user/flavio',component: FotoListComponent },
  { path:'p/add',component:LoginComponent },
  { path:'**',component: NotFound}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
