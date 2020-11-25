import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
public tipoRegistro: 'passageiro'

  
  public user = {
    name:'',
    email: '',
    senha:'',
    confirmacao_senha:'',
    
  };


  public fGroup: FormGroup;

  constructor(public registerForm: FormBuilder) {
    this.fGroup = this.registerForm.group({
      nome: "" ,
      email: "",
      senha: "",
      confirmacao_senha: "",
    });
    
   }
 

  ngOnInit() {
  }

}
