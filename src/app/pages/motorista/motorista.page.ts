import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motorista',
  templateUrl: './motorista.page.html',
  styleUrls: ['./motorista.page.scss'],
})
export class MotoristaPage implements OnInit {
  
  private destroy: Subject<boolean> = new Subject<boolean>();
  
  public listaPassageiros;
  
  constructor(private userService: UserService) { 
  }

  ngOnInit() {
    this.getPassageiros();
  }

  getPassageiros() {
    this.userService
    .buscarTodos(true)
    .pipe(takeUntil(this.destroy))
    .subscribe((passageiros) => {
      this.listaPassageiros = passageiros;
      console.log('passageiros', passageiros)
    })
  }

}
