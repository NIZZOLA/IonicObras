import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL } from 'src/environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token = "";
  constructor(private http: HttpClient,
              private storage: StorageService) {
               }
               
  private async getToken() {
    return "1234";
  }
  private async getToken1() {
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
    
    let url = SERVER_URL + "/clientes";
    //console.log('getclientes de:'+ url);
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
    let url = SERVER_URL + '/empreendimento/' + id;
    
    return this.http.get(url).toPromise();
  }

  getEmpreendimentoPorCliente(id) {
    let url = SERVER_URL + '/empreendimentos/cliente/' + id;

    return this.http.get(url).toPromise();
  }

  getFotos(idEmpreendimento) {
    let url = SERVER_URL + '/fotos/' + idEmpreendimento;
    
    return this.http.get(url).toPromise();
  }

  getTiposDeDespesasEReceitas() {
    let url = SERVER_URL + '/tipodedespesasereceitas';
    return this.http.get(url ).toPromise();
  }
  
  getFormaDePagamento() {
    let url = SERVER_URL + '/formadepagamento';
    return this.http.get(url ).toPromise();
  }

  postFoto(formData) {
    let url = SERVER_URL + '/fotos';

    return this.http.post(url, formData).subscribe( val => console.log(val));
  }

  postConta(conta) {
    let url = SERVER_URL + '/contas';
    return this.http.post(url,conta ).subscribe( val => console.log(val));
  }

}
