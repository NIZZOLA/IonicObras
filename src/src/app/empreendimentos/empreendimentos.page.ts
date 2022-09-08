import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
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
              private router: Router,
              private loadingController: LoadingController) {
    
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

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Acessando base de dados',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }
  
  dismissLoader() {
    this.loadingController.dismiss().then((response) => {
      console.log('Loader closed!', response);
    }).catch((err) => {
      console.log('Error occured : ', err);
    });
  }

  CarregaDados() {
    this.presentLoading();
      this.api.getEmpreendimentos()
        .then((json) => {
          console.log(json);
          this.resultado = json;
        })
        .catch((erro) => {
          console.log("Erro ao carregar a requisição" + erro);
        });
        this.dismissLoader();
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
