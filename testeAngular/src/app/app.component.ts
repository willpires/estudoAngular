import { Component } from '@angular/core';
import { FotoService } from './components/fotos/fotos/foto.serve';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testeAngular';
  fotos: Object[] = []
  constructor(fotoService: FotoService){
    fotoService.listFromUser('flavio')
    .subscribe((item) =>{
      this.fotos = item
      console.log(this.fotos)
    })
  }
}
