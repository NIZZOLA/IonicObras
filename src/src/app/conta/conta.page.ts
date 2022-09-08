import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { ApiService } from '../service/apiservice.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {

  tiposdespesasreceitas: any;
  formasdepagamento : any;

  constructor(private api: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute, 
    private router: Router,
    private loadingController: LoadingController) {

      this.CarregaTipos();
      this.CarregaFormas();

    }

  ngOnInit() {
  }

  CarregaTipos() {
    //this.presentLoading();
      this.api.getTiposDeDespesasEReceitas()
        .then((json) => {
          console.log(json);
          this.tiposdespesasreceitas = json;
        })
        .catch((erro) => {
          console.log("Erro ao carregar a requisição" + erro);
        });
        //this.dismissLoader();
    }


    CarregaFormas() {
      //this.presentLoading();
        this.api.getFormaDePagamento()
          .then((json) => {
            console.log(json);
            this.formasdepagamento = json;
          })
          .catch((erro) => {
            console.log("Erro ao carregar a requisição" + erro);
          });
          //this.dismissLoader();
      }
  
  
}
