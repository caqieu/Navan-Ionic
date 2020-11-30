import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public tipoRegistro = 'motorista';
  
  private destroy: Subject<boolean> = new Subject<boolean>();

  public registerFormPassageiro = this.formBuilder.group({
    nome: [{value: null, disabled: false, }, Validators.required],
    username: [{value: null, disabled: false, }, Validators.required],
    email: [{value: null, disabled: false, }, Validators.required],
    password: [{value: null, disabled: false, }, Validators.required],
    cpf: [{value: null, disabled: false}, Validators.required],
    telefone: [{value: null, disabled: false}, Validators.required],
    destino: [{value: null, disabled: false}, Validators.required],
    endereco: [{value: null, disabled: false}, Validators.required]
  });

  public registerFormMotorista = this.formBuilder.group({
    nome: [{value: null, disabled: false, }, Validators.required],
    username: [{value: null, disabled: false, }, Validators.required],
    email: [{value: null, disabled: false, }, Validators.required],
    password: [{value: null, disabled: false, }, Validators.required],
    cpf: [{value: null, disabled: false}, Validators.required],
    telefone: [{value: null, disabled: false}, Validators.required],
  });

  public fGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private LoadingCOntroller: LoadingController,
    private alertController: AlertController,
    private router: Router
    ) {
    // this.fGroup = this.formBuilder.group({
    //   nome: "" ,
    //   email: "",
    //   senha: "",
    //   confirmacao_senha: "",
    // });
    
   }
 

  ngOnInit() {
  }

  async register() {

    if(this.tipoRegistro == 'motorista') {
      const obj = {
        nome: this.registerFormMotorista.get('nome').value,
        username: this.registerFormMotorista.get('username').value,
        email: this.registerFormMotorista.get('email').value,
        password: this.registerFormMotorista.get('password').value,
        cpf: this.registerFormMotorista.get('cpf').value,
        telefone: parseInt(this.registerFormMotorista.get('telefone').value),
      }
      console.log('obj', obj)
      this.userService
      .registerMotorista(obj)
      .pipe(takeUntil(this.destroy))
      .subscribe((result) => {
        console.log('result', result)
      })
    } else {
      const obj = {
        nome: this.registerFormPassageiro.get('nome').value,
        username: this.registerFormPassageiro.get('username').value,
        email: this.registerFormPassageiro.get('email').value,
        password: this.registerFormPassageiro.get('password').value,
        cpf: this.registerFormPassageiro.get('cpf').value,
        telefone: parseInt(this.registerFormPassageiro.get('telefone').value),
        destino: this.registerFormPassageiro.get('destino').value,
        endereco: this.registerFormPassageiro.get('endereco').value,
        presenca: true,
        id_motorista: 10
      }

      console.log('obj', obj)
      this.userService
      .registerPassageiro(obj)
      .pipe(takeUntil(this.destroy))
      .subscribe(async (result) => {
        console.log('result', result)
        const alert = await this.alertController.create({
          header: 'Usuário Criado',
          message: 'Usuário criado com sucesso!',
          buttons: ['ok']
        })
    
        await alert.present();
      })
    }

  }

}
