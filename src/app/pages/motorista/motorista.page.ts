import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motorista',
  templateUrl: './motorista.page.html',
  styleUrls: ['./motorista.page.scss'],
})
export class MotoristaPage implements OnInit {
  
  constructor(public passageiros: object) { 
    this.passageiros = [
     {"nome" : "Renan",
      "img" : "",
      "endereco":"rua 1",

    },
    {"nome" : "Caique",
    "img" : "",
    "endereco":"rua 2",
    
  },
  {"nome" : "Robson",
  "img" : "",
  "endereco":"rua 3",
  
},
{"nome" : "Gabriel",
"img" : "",
"endereco":"rua 4",

}

    ];
  }

  ngOnInit() {
  }

}
