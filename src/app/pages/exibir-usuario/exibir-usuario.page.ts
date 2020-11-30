import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-exibir-usuario',
  templateUrl: './exibir-usuario.page.html',
  styleUrls: ['./exibir-usuario.page.scss'],
})
export class ExibirUsuarioPage implements OnInit {

  public id = 0;
  public passageiro: any = {};

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.userService.buscarId(this.id).subscribe(dados => {
      this.passageiro = dados[0]
      console.log('passageiro: ', this.passageiro)
    })
    
  }

}
