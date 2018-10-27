import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {AngularFireList} from 'angularfire2/database'; 
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { QuizCode, Users, Questions } from '../../models/quizcodeitem/quizcode.interface';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
/**
 * Generated class for the StudenthomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studenthome',
  templateUrl: 'studenthome.html',
})
  
export class StudenthomePage {


  items:any;
  itemsref: AngularFirestoreCollection<QuizCode>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, public afs:AngularFirestore,public alertCtrl: AlertController) {
    
    this.db.list('quizcode').valueChanges().subscribe( data => {
      
      //console.log(data[0]);
      this.items = data;
    });
    console.log("hi");
   

  }
  showAlert(message:string){
    const alert = this.alertCtrl.create({
     title: 'Info',
     subTitle: message,
     buttons: ['OK']
 }); 
 alert.present();
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudenthomePage');
  }
onclick(){
  this.showAlert('"UNDER CONSTRCTION" Questions are stored in database but necessary text fields are not created.');
}
}
