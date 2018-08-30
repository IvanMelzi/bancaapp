import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import { UserModel } from '../../models/user.model';
import { SignupPage } from '../signup/signup';
import {RequestService} from "../../services/request.service";
import {HomePage} from "../home/home";
import { Storage } from '@ionic/storage';
import * as JWT from 'jwt-decode';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user: UserModel = new UserModel();

  url: string = 'https://mighty-refuge-81707.herokuapp.com/api/auth/user/authenticate';
  constructor(public navCtrl: NavController,
              public requestSrv: RequestService,
              private toastCtrl: ToastController,
              private storage: Storage) {

  }

  formData() {
    this.login();
  }

  login() {
    let data = {
      "email": this.user.email,
      "password": this.user.password
    };
    console.log("data");
    console.log(data);
    this.requestSrv.auth(this.url, data).then((response) => {
      let decoded = JWT(response.token);
      console.log(response);
      this.storage.set('userId', decoded.id).then(() => {
        this.navCtrl.setRoot(HomePage, {token: response.token});
      });
    }).catch((err) => {
      this.presentToast('An error has ocurred');
    });
  }

  onGoToSignUp() {
    this.navCtrl.push(SignupPage);
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

}
