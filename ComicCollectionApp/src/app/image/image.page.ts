import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss'],
})
export class ImagePage implements OnInit {

  constructor(private alertCtrl: AlertController)
  {}

  async showAlert(){
    this.alertCtrl.create({
      header: "Enable Notifications",
      message: "By allowing these notifications, you will be alerted of any new releases from this specific company.",

      buttons:[
        {
          text: "Don't Allow"
        },
        {
          text: "OK"
        }
      ]


    }).then (res => res.present());
  }

  ngOnInit() {
  }

}
