import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8080/passageiros'

  constructor(private http: HttpClient) { }

  public buscarTodos() {
    return this.http.get(`${this.url}`)
  }

  public buscarIdMotorista(id_motorista: number) {
    return this.http.get(`${this.url}?id_motorista=${id_motorista}`)
  }

  public buscarId(id: number) {
    return this.http.get(`${this.url}/${id}`)
  }
}
