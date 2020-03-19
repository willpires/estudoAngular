import { Component, OnInit } from '@angular/core';
import { Foto } from '../fotos/foto'
import { FotoService } from '../fotos/foto.serve'

@Component({
  selector: 'app-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: ['./foto-list.component.css']
})


export class FotoListComponent implements OnInit {

  title = 'testeAngular';
  fotos: Foto[] = []

  constructor(private fotoService: FotoService){

  }

  ngOnInit(){
    this.fotoService.listFromUser('flavio')
    .subscribe((item) =>{
      item[0].url
      this.fotos = item
      console.log(this.fotos)
    })
  }
}
