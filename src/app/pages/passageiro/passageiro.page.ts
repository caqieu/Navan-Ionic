import { AlertController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-passageiro',
  templateUrl: './passageiro.page.html',
  styleUrls: ['./passageiro.page.scss'],
})
export class PassageiroPage implements OnInit {

  private destroy: Subject<boolean> = new Subject<boolean>();
  public passageiro = JSON.parse(localStorage.getItem('user'));
  public token = localStorage.getItem('token');
  public presenca;

  constructor(
    private userService: UserService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  enviarPresenca() {
    const passageiro = {
      id: this.passageiro.id,
      token: this.token,
      presenca: JSON.parse(this.presenca),
    };

    console.log(passageiro)

    this.userService
      .updatePassageiro(passageiro)
      .pipe(takeUntil(this.destroy))
      .subscribe((result) => {
        console.log('result', result)
      })
  }

  async alertData() {
    const alert = await this.alertController.create({
      header: 'Data atualizada',
      message: 'Data atualizada com sucesso!',
      buttons: ['ok']
    })

    await alert.present();
  }

}
