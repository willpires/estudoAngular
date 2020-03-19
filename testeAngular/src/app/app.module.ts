import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotosModule } from './components/fotos/fotos/fotos.module';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { ErrorsModuleModule } from './errors-module/errors-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FotosModule,
    HttpClientModule,
    ErrorsModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
