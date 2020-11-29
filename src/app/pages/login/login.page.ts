import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public tipoLogin:'';

  public listaPassageiros: any = [];

  constructor(private userService: UserService) { }

  ionViewWillEnter() {
    this.buscarPassageiros()
  }

  public buscarPassageiros() {
    this.userService.buscarTodos().subscribe(dados => {
      this.listaPassageiros = dados
      console.log('lista', this.listaPassageiros)
    })
  }

  
  

  ngOnInit() {
  }

 
}
