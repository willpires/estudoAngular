import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
})
export class FotosComponent implements OnInit {

  @Component({
    selector: 'app-fotos',
    templateUrl: '../fotos/fotos.component.html',

  })

  @Input() url = '';

  ngOnInit(){

  }


}
