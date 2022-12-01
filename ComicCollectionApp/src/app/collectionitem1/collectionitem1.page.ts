import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-collectionitem1',
  templateUrl: './collectionitem1.page.html',
  styleUrls: ['./collectionitem1.page.scss'],
})
export class Collectionitem1Page implements OnInit {

  constructor(private alertCtrl: AlertController)
  {}

  async showAlert(){
    this.alertCtrl.create({
      header: "Favorite This Series",
      message: "Favoriting this series will automatically add any missing back issues into your wishlist. Graphic novels will need to be added manually to the wishlist.",

      buttons:[
        {
          text: "Favorite"
        },
        {
          text: "Cancel"
        }
      ]


    }).then (res => res.present());
  }


  ngOnInit() {
  }

}
