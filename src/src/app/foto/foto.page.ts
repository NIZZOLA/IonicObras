import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from '../service/apiservice.service';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.page.html',
  styleUrls: ['./foto.page.scss'],
})
export class FotoPage implements OnInit {

  idEmpreendimento: string;
  empreendimento: any;
  descricao: string;

  constructor(private api: ApiService,
              private navCtrl: NavController,
              private route: ActivatedRoute, 
              private router: Router) { 

    if(this.router.getCurrentNavigation().extras.state) {

      this.idEmpreendimento = this.router.getCurrentNavigation().extras.state.empreendimentoId;
          console.log("Id do empreendimento:" + this.idEmpreendimento);
          
          this.CarregaEmpreendimento(this.idEmpreendimento);
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


  SubmitForm(fileChangeEvent) {
    // Get a reference to the file that has just been added to the input
    const photo = fileChangeEvent.target.files[0];
    // Create a form data object using the FormData API
    let formData = new FormData();
    // Add the file that was just added to the form data
    formData.append("arquivo", photo, photo.name);
    formData.append("descricao", this.descricao );
    formData.append("idEmpreendimento", this.idEmpreendimento);
    
    // POST formData to server using HttpClient
    this.api.postFoto(formData);
  }

}
