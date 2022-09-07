import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/apiservice.service';

@Component({
  selector: 'app-empreendimento',
  templateUrl: './empreendimento.page.html',
  styleUrls: ['./empreendimento.page.scss'],
})
export class EmpreendimentoPage implements OnInit {

  id: string;
  resultado: any;
  constructor(private api: ApiService, private route: ActivatedRoute,
    private router: Router) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {

        this.id = this.router.getCurrentNavigation().extras.state.empreendimentoId;
        console.log("Id do cliente:" + this.id);
        this.CarregarEmpreendimento(this.id);
      }
      else {
        // se chegou aqui não teve o id do empreendimento
      }
    });
  }

  ngOnInit() {
  }

  CarregarEmpreendimento(id) {
    this.api.getEmpreendimento(id)
      .then((json) => {
        console.log(json);
        this.resultado = json;
      })
      .catch((erro) => {
        console.log("Erro ao carregar a requisição" + erro);
      });
  }

}
