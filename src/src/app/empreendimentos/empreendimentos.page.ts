import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from '../service/apiservice.service';

@Component({
  selector: 'app-empreendimentos',
  templateUrl: './empreendimentos.page.html',
  styleUrls: ['./empreendimentos.page.scss'],
})
export class EmpreendimentosPage implements OnInit {
  
  resultado : any = [];
  id: any;
  constructor(private api: ApiService,
              private navCtrl: NavController,
              private route: ActivatedRoute, 
              private router: Router) {
    
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state) {

        this.id = this.router.getCurrentNavigation().extras.state.clienteId;
            console.log("Id do cliente:" + this.id);
            this.CarregaDadosPorCliente(this.id);
      }
      else
      {
        this.CarregaDados();
      }
    });
   }

  ngOnInit() {
  }

  CarregaDados() {
      this.api.getEmpreendimentos()
        .then((json) => {
          console.log(json);
          this.resultado = json;
        })
        .catch((erro) => {
          console.log("Erro ao carregar a requisição" + erro);
        });
    }

    CarregaDadosPorCliente(idCliente) {
      this.api.getEmpreendimentos()
        .then((json) => {
          console.log(json);
          this.resultado = json;
        })
        .catch((erro) => {
          console.log("Erro ao carregar a requisição" + erro);
        });
    }

    openPageEmpreendimento(idEmpreendimento) {
      let navExtras: NavigationExtras = {
        state: { empreendimentoId: idEmpreendimento }
      }
      this.navCtrl.navigateForward('empreendimento', navExtras); 
    }

    openPageFotos(idEmpreendimento) {
      let navExtras: NavigationExtras = {
        state: { empreendimentoId: idEmpreendimento }
      }
      this.navCtrl.navigateForward('fotos', navExtras); 
    }

    openPageContas(idEmpreendimento) {
      
      let navExtras: NavigationExtras = {
        state: { empreendimentoId: idEmpreendimento }
      }
      this.navCtrl.navigateForward('contas', navExtras);
    }

}
