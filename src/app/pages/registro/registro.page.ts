import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

public tipoRegistro: ''
  
  private destroy: Subject<boolean> = new Subject<boolean>();

  public registerForm = this.formBuilder.group({
    nome: [{value: null, disabled: false, }, Validators.required],
    username: [{value: null, disabled: false, }, Validators.required],
    email: [{value: null, disabled: false, }, Validators.required],
    senha: [{value: null, disabled: false, }, Validators.required],

    
    
  })

  public fGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private LoadingCOntroller: LoadingController,
    private alertController: AlertController,
    private router: Router
    ) {
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
