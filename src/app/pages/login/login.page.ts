import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm = this.formBuilder.group({
		username: ['', Validators.required],
		password: ['', Validators.required],
	});

  public errors;
  public tipoLogin = 'Motorista';

  public listaPassageiros: any = [];
  
  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
		private router: Router,
		private formBuilder: FormBuilder,
		private loadingController: LoadingController) { }


  ionViewWillEnter() {
  }

  ngOnInit() {
	  console.log()
  }

  async presentLoading() {
		const loading = await this.loadingController.create({
		  cssClass: 'loading-pedido',
		  message: 'Autenticando...',
		});
		await loading.present();
  }
  
  login() {
		this.presentLoading();
		this.errors = null;
		this.authenticationService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value, this.tipoLogin)
			.pipe(first())
			.subscribe(
				data => {
					this.loadingController.dismiss();
					this.router.navigate([`/${this.tipoLogin}`]);
					console.log('Logado com sucesso');
					console.log(data);
				},
				error => {
					this.loadingController.dismiss();
					this.errors = error;
					console.error('Erro');
					console.log(error);
				});
  }
  
  register() {
		this.router.navigate(['/register']);
	}

 
}
