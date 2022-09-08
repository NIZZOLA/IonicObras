import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from '../service/apiservice.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.page.html',
  styleUrls: ['./fotos.page.scss'],
})
export class FotosPage implements OnInit {

  idEmpreendimento: string;
  empreendimento: any;

  constructor(private api: ApiService,
              private navCtrl: NavController,
              private route: ActivatedRoute, 
              private router: Router) { 

    if(this.router.getCurrentNavigation().extras.state) {

      this.idEmpreendimento = this.router.getCurrentNavigation().extras.state.empreendimentoId;
          console.log("Id do empreendimento:" + this.idEmpreendimento);
          
          //this.CarregaContasPorCliente(this.id);
    }
  
  }
  
  ngOnInit() {
  }

  CarregaEmpreendimento(id) {
    this.api.getEmpreendimento(id)
    .then((json) => {
      console.log(json);
      this.empreendimento = json;
    })
    .catch((erro) => {
      console.log("Erro ao carregar a requisição" + erro);
    });
  }

}
