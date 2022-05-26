import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {

  constructor(private alertCtrl: AlertController)
  {}

  async showAlert2(){
    this.alertCtrl.create({
      header: "Sign Out",
      message: "Are you sure that you want to sign out of your account. You can sign back in at anytime.",

      buttons:[
        {
          text: "OK"
        },
        {
          text: "CANCEL"
        }
      ]


    }).then (res => res.present());
  }

}
