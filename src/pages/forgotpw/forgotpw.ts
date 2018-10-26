import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the ForgotpwPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotpw',
  templateUrl: 'forgotpw.html',
})
export class ForgotpwPage {
  @ViewChild('username') user;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth, public alertCtrl: AlertController) {
  }
//repo
  showAlert(message:string){
    const alert = this.alertCtrl.create({
     title: 'Info',
     subTitle: message,
     buttons: ['OK']
   }); 
   alert.present();
   }



   resetpw(){
    console.log("hey");
    this.fire.auth.sendPasswordResetEmail(this.user.value).then(data => {
      this.showAlert('Please check your email. Reset link has been sent to the email');
     }).catch(function(error){
      this.showAlert(error.message);
     });
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpwPage');
  }



}
