import { Component } from '@angular/core';
import {ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RequestService } from '../../services/request.service';
import { NewCardPage } from '../new-card/new-card';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  url: string = 'https://mighty-refuge-81707.herokuapp.com/api/accounts';
  token: string = '';

  cards = [];

  constructor(public navCtrl: NavController,
              private storage: Storage,
              public requestSrv: RequestService,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private toastCtrl: ToastController) {
    this.token = navParams.get('token');
    this.getMyCards();
  }

  getMyCards() {
    this.requestSrv.getAccount(this.url, this.token).then((response) => {
      console.log('response--');
      console.log(response);
      response['response'].forEach((res) => {
        this.cards.push(res);
      });
    }).catch((err) => {
      this.presentToast('An error has ocurred')
    });
  }

  newCard() {
    const modal = this.modalCtrl.create(NewCardPage, {token: this.token});
    modal.present();
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
