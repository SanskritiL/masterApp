import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireList} from 'angularfire2/database'; 
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';
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
  items: Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    this.items =db.list('quizCode').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudenthomePage');
  }

}
