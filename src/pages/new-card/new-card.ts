import { Component } from '@angular/core';
import { NavParams, ToastController, ViewController } from 'ionic-angular';
import { RequestService } from '../../services/request.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-new-card',
  templateUrl: 'new-card.html',
})

export class NewCardPage {

  url: string = 'https://mighty-refuge-81707.herokuapp.com/api/accounts';
  urlCatalog: string = 'https://mighty-refuge-81707.herokuapp.com/api/catalogs/cards';
  token: string = '';

  typeCards = [];
  cardType = {};

  constructor(public params: NavParams,
              public viewCtrl: ViewController,
              private storage: Storage,
              public requestSrv: RequestService,
              private toastCtrl: ToastController) {
    this.token = this.params.get('token');
  }


  ionViewDidLoad() {
    this.viewCatalogCards();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  createCard() {
    this.storage.get('userId').then((userId) => {
      let data = {
        "userId": userId,
        "type": this.cardType.type,
        "name": this.cardType.name
      };

      this.requestSrv.createCard(this.url, data, this.token).then((response) => {
        this.presentToast('Card created correctly')
      }).catch((err) => {
        this.presentToast('An error has ocurred')
      });
    });
  }

  viewCatalogCards() {
    this.requestSrv.getCatalogs(this.urlCatalog, this.token).then((response) => {
      response['response'].type_cards.forEach((type) => {
        this.typeCards.push(type);
      });
    }).catch((err) => {
      this.presentToast('An error has ocurred')
    });
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
