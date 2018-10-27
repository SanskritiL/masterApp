import { Component,ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomecreatequizPage } from '../homecreatequiz/homecreatequiz';
import { Input } from '@angular/core';
import {AngularFireList} from 'angularfire2/database'; 
import { AngularFireDatabase} from 'angularfire2/database';
import { QuizCode } from '../../models/quizcodeitem/quizcode.interface';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //creating a new object
  quizCode= {} as QuizCode;
  homecreatequizPage = HomecreatequizPage;
   
  quizCode$ : AngularFireList<QuizCode>;

  constructor(public navCtrl: NavController, private database: AngularFireDatabase) {
    this.quizCode$ = this.database.list('quizcode');

  }
  
onclick(quizCode: QuizCode){
  //console.log(quizCode);
  this.navCtrl.setRoot(HomecreatequizPage,quizCode);

//create a new Obj &push under code list
this.quizCode$.push({
  code: this.quizCode.code
});

}

}
