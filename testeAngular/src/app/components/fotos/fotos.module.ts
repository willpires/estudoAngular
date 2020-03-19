import { NgModule } from '@angular/core';
import { FotosComponent } from './fotos.component';
import { FotoListComponent } from './foto-list/foto-list.component';
import { LoginComponent } from './login/login.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    FotosComponent,
    FotoListComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FotoListComponent,
    FotosComponent,
    LoginComponent
  ]

})
export class FotosModule {

}
