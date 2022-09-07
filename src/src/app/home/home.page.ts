import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '../models/loginResponse';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  login: LoginResponse;
  username: string;
  role: string;
  constructor(private storage: StorageService,
    private router: Router) {
    this.loadStorage();
  }

  async loadStorage() {
    let taskJson = this.storage.get('login');
    if (taskJson != null) {
      this.login = await taskJson;
      //console.log(this.login);
      if (this.login != null) {
        this.username = this.login.user.username;
        this.role = this.login.user.role;
      } else {
        //console.log('não logado');
        //this.router.navigate(['login']);

        this.username = "Teste";
      }
    }
  }
}
