import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import { UserModel } from '../../models/user.model';
import { RequestService } from '../../services/request.service';
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user: UserModel = new UserModel();
  url: string = 'https://mighty-refuge-81707.herokuapp.com/api/auth/user/create';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public requestSrv: RequestService,
              private toastCtrl: ToastController) {
  }

  formData() {
    let data = {
      "email": this.user.email,
      "firstname": this.user.firstname,
      "lastname": this.user.lastname,
      "password": this.user.password
    };
    console.log("data");
    console.log(data);
    this.requestSrv.auth(this.url, data).then((response) => {
      this.presentToast('User was created successfully', true);
    }).catch((err) => {
      this.presentToast('An error has ocurred', false)
    });
  }

  presentToast(message, goToLogin) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      if (goToLogin) {
        this.navCtrl.popTo(LoginPage);
      }
    });

    toast.present();
  }
}
