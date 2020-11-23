import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public registerForm = this.formBuilder.group({
    nome: "" ,
    email: "",
    senha: "",
    confirmacao_senha: "",
  })

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

}
