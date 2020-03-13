import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[ PhotoComponent],
  exports: [ PhotoComponent],
  imports: [ HttpClientModule, CommonModule]
})
export class PhotosModule{

}
