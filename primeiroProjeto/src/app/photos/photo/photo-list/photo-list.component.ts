import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Object[] = [ ];
  constructor( private photoServece: photoService){}

  ngOnInit(): void{
  this.photoServece.listFromUser('flavio').subscribe((photo)=>{
    this.photos = photo
})
}

}
