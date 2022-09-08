import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from '../service/apiservice.service';

@Component({
  selector: 'app-empreendimento',
  templateUrl: './empreendimento.page.html',
  styleUrls: ['./empreendimento.page.scss'],
})
export class EmpreendimentoPage implements OnInit {

  id: string;  
  empreendimento :any;
  contas: any;
  fotos: any;

  constructor(private api: ApiService, 
              private route: ActivatedRoute,
              private navCtrl: NavController,
              private router: Router) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {

        this.id = this.router.getCurrentNavigation().extras.state.empreendimentoId;
        //console.log("Id do empreendimento:" + this.id);
        this.CarregarEmpreendimento(this.id);
      }
      else {
        // se chegou aqui não teve o id do empreendimento
        this.navCtrl.navigateForward('empreendimentos'); 
      }
    });
  }

  ngOnInit() {
  }

  CarregarEmpreendimento(id) {
    this.api.getEmpreendimento(id)
      .then((json) => {
        //console.log(json);
        this.empreendimento = json;
        console.log(this.empreendimento);

        this.contas = this.empreendimento.contas;
        this.fotos = this.empreendimento.fotos;
      })
      .catch((erro) => {
        console.log("Erro ao carregar a requisição" + erro);
      });
  }

  NovaFoto(idEmpreendimento) {
    let navExtras: NavigationExtras = {
      state: { empreendimentoId: this.id }
    }
    this.navCtrl.navigateForward('foto', navExtras); 
  }

  NovaConta(idEmpreendimento) {
    
    let navExtras: NavigationExtras = {
      state: { empreendimentoId: this.id }
    }
    this.navCtrl.navigateForward('conta', navExtras);
  }

}
