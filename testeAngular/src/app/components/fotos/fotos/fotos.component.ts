import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
})
export class FotosComponent implements OnInit {
  Api = 'http://localhost:3000/flavio/photos';
  fotos;
  constructor(private http: HttpClient) {

  }
  @Component({
    selector: 'app-fotos',
    templateUrl: '../fotos/fotos.component.html',

  })

  @Input() url = '';

  ngOnInit() {
    this.http.get(this.Api).subscribe(( item )=>{
      this.fotos = item
    })

  }
  //   Axios.get(this.Api).then((response) => {
  //     console.log(response.data)
  //     const { data } = response
  //     this.fotos = data
  //     console.log(this.fotos);
  //   }).catch((erro) => {
  //     console.log("error",erro);
  //   });
  //   // Axios.get({
  //   //   url:"http://localhost:300/user/flavio"
  //   // },(response)=>{
  //   //   console.log(response)
  //   //   const { url }= response
  //   //   this.fotos = url
  //   // })
  //
  // }


}
