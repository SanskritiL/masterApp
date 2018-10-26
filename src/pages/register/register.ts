import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import {AngularFireList} from 'angularfire2/database'; 
import { QuizCode, Users } from '../../models/quizcodeitem/quizcode.interface';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('username') user;
  @ViewChild('password') password;
  @ViewChild('nickname') nickname;


  users= {} as Users;

  users$: AngularFireList<Users>;

  constructor(public alertCtrl: AlertController, private fire: AngularFireAuth  ,public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
   
   this.users$ = this.database.list('users');
  
  }

  showAlert(message:string){
    const alert = this.alertCtrl.create({
     title: 'Info',
     subTitle: message,
     buttons: [{
       text: 'Login Now!',
       handler:(click)=>{
         console.log("Login now");
         this.returnToLogin();
       }
     },
     {
      text: 'OK',
      handler:(click)=>{
        console.log("Register again");
        
      }
    }
    ]
     

 }); 
 alert.present();
   }

   returnToLogin(){
     this.navCtrl.push(LoginPage);
   }

   


registerUser(){
  this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
  .then(data => {
     console.log('got data' ,data);
    this.showAlert("Successfully registered. Thank you for creating your account with us. Login to enjoy the app");
    
    this.users$.push({
      email: this.user.value,
      password: this.password.value,
      nickname: this.nickname.value
   });

  })
  .catch(error => {
  //console.log('got an error: ', error);
  this.showAlert(error.message);
  }); 
console.log("Would register with ", this.user.value, this.password.value,this.nickname.value);
}
 
}
