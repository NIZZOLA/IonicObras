import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/apiservice.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  resultado : any = [];
  constructor(private api: ApiService) {
    this.CarregaDados();
   }

  ngOnInit() {
  }

  CarregaDados() {
    this.api.getClientes()
      .then((json) => {
        console.log(json);
        this.resultado = json;
      })
      .catch((erro) => {
        console.log("Erro ao carregar a requisição" + erro);
      });
  }
}
