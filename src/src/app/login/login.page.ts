import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/loginRequest';
import { StorageService } from '../service/storage.service';
import { UserService } from '../service/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginRequest: LoginRequest = new LoginRequest();
  errorMessage: string = "";

  constructor(private userService: UserService,
    private storage: StorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.storage.remove("login");
  }

  login() {
    this.userService.login(this.loginRequest).subscribe(retorno => {
      //console.log(retorno);  ve o retorno da api de autenticação
      if (retorno && retorno.token) {
        console.log('login ok!');
        this.storage.set("login", retorno);
        this.router.navigate(['/home']);
      } else {
        console.log('erro no login:' );
        this.errorMessage = retorno.message;
        console.log( retorno);
      }
    })
  }

  forgotPwd() {
    console.log('esqueci a senha !');
  }
}
