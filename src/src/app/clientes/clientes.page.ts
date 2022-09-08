import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { ApiService } from '../service/apiservice.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  resultado : any = [];
  errorMessage : string = '';
  constructor(private api: ApiService,
              private navCtrl: NavController,
              public loadingController: LoadingController) {
    this.CarregaDados();
   }

  ngOnInit() {
  }

  CarregaDados() {
    this.presentLoading();
    //console.log("Chamando a api de clientes");
    this.api.getClientes()
      .then((json) => {
        //console.log("Houve resposta positiva");
        //console.log(json);
        this.resultado = json;
        this.errorMessage = '';
      })
      .catch((erro) => {
        console.log("Erro ao carregar a requisição" );
        console.log(erro);
        this.errorMessage = "Falhar ao comunicar-se com o serviço remoto";
      });
  }

  openPageEmpreendimentos(idCliente: number) {
    console.log(idCliente);
    let navExtras: NavigationExtras = {
      state: { clienteId: idCliente }
    }
    this.navCtrl.navigateForward('empreendimentos', navExtras);
 }

 async presentLoading() {
  const loading = await this.loadingController.create({
    message: 'Acessando base de dados',
    duration: 2000
  });
  await loading.present();
  const { role, data } = await loading.onDidDismiss();
}

}
