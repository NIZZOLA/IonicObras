import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL } from 'src/environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  token = "";
  constructor(private http: HttpClient,
              private storage: StorageService) {
               }

  private async getToken() {
    let taskJson = this.storage.get('login');
    if (taskJson != null) {
      let login = await taskJson;
      //console.log(this.login);
      if (login != null) {
        return login.token;
      } else {
        //console.log('não logado');
        return null;
      }
    }
  }

  private getHeaders( token: string) {
    return new HttpHeaders({
      'Content-type' : 'application/json',
      'Authorization': 'Bearer ' + token
    });
  }
  public async getClientes() {
    console.log('getclientes');
    let url = SERVER_URL + "/employee";
    let token = await this.getToken();
    if(token != null) {

        return this.http.get(url,{headers : this.getHeaders(token) } ).toPromise();
    }
    
    return null;
  }

  getCliente(id) {
    let url = SERVER_URL + '/clientes/?id=' + id;
    return this.http.get(url + id).toPromise();
  }

  getEmpreendimentos() {
    let url = SERVER_URL + '/empreendimentos';
    
    return this.http.get(url).toPromise();
  }

  getEmpreendimento(id) {
    let url = SERVER_URL + '/empreendimentos/?id=' + id;
    
    return this.http.get(url + id).toPromise();
  }
}
