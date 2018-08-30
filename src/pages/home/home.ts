import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {RequestService} from "../../services/request.service";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url: string = 'https://mighty-refuge-81707.herokuapp.com/api/accounts';
  urlCatalog: string = 'https://mighty-refuge-81707.herokuapp.com/api/catalogs/cards';
  token: string = '';

  constructor(public navCtrl: NavController,
              private storage: Storage,
              public requestSrv: RequestService,
              public navParams: NavParams
              ) {
/*    this.token = navParams.get('token');
    this.requestSrv.getAccount(this.url, this.token).then((response) => {
      console.log('response');
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });

    this.requestSrv.getCatalogs(this.urlCatalog, this.token).then((response) => {
      console.log('responseCatalog');
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });*/

/*    this.storage.get('userId').then((userId) => {
      let data = {
        "userId": userId,
        "type": 'TDC',
        "name": 'Tarjeta Oro'
      };
      this.requestSrv.createCard(this.url, data, this.token).then((response) => {
        console.log('create card');
        console.log(response);
      }).catch((err) => {
        console.log(err);
      });
    });*/

  }

}
