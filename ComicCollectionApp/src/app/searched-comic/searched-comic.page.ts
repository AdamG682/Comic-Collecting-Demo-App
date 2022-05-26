import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-searched-comic',
  templateUrl: './searched-comic.page.html',
  styleUrls: ['./searched-comic.page.scss'],
})
export class SearchedComicPage {

  constructor(private alertCtrl: AlertController)
  {}

  async addAlert(){
    this.alertCtrl.create({
      header: "Add to Collection",
      message: "Congratulations on finding this issue! Do you wish to add it to your collection?",

      buttons:[
        {
          text: "YES"
        },
        {
          text: "NO"
        }
      ]


    }).then (res => res.present());
  }

  async removeAlert(){
    this.alertCtrl.create({
      header: "Not in Collection",
      message: "Sorry on not having this issue. Do you want to add this issue to your wishlist?",

      buttons:[
        {
          text: "YES"
        },
        {
          text: "NO"
        }
      ]


    }).then (res => res.present());
  }

}
