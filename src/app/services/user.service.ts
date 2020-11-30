import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:5432/passageiros'

  constructor(private http: HttpClient) { }

  public buscarTodos(presenca: boolean) {
    return this.http.get(`${this.url}?presenca=${presenca}`)
  }

  public buscarIdMotorista(id_motorista: number) {
    return this.http.get(`${this.url}?id_motorista=${id_motorista}`)
  }

  public buscarId(id: number) {
    return this.http.get(`${this.url}/${id}`)
  }

  public registerMotorista(userObj) {
    return this.http.post(`http://localhost:5432/registerMotorista`, userObj);
  }

  public registerPassageiro(userObj) {
    return this.http.post(`http://localhost:5432/registerPassageiro`, userObj);
  }

  public updatePassageiro(passageiro) {
    return this.http.patch(`http://localhost:5432/passageiros/${passageiro.id}`, {
      presenca: passageiro.presenca
    });
  }
}
