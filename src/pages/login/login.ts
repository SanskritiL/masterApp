import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { RegisterPage } from "../register/register";
import { AngularFireAuth } from "@angular/fire/auth";
import { ModePage } from "../mode/mode";
import { ForgotpwPage } from "../forgotpw/forgotpw";
import { NewmodePage } from "../newmode/newmode";
import { Users } from "../../models/quizcodeitem/quizcode.interface";

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  @ViewChild("username")
  user;
  @ViewChild("password")
  password;
  users = {} as Users;

  registerpage = RegisterPage;
  constructor(
    public alertCtrl: AlertController,
    private fire: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  showAlert(message: string) {
    const alert = this.alertCtrl.create({
      title: "Info",
      subTitle: message,
      buttons: ["OK"]
    });
    alert.present();
  }

  signIn() {
    this.fire.auth
      .signInWithEmailAndPassword(this.user.value, this.password.value)
      .then(data => {
        console.log("got some data", data);
        this.showAlert("Hi!  " + this.user.value + " Success You're logged in");
        localStorage.setItem("user", this.user.value);

        console.log("locally");

        console.log(localStorage.getItem("user"));

        console.log("hole");

        this.navCtrl.push(NewmodePage, { users: this.user.value });
        //user os logged in
      })
      .catch(error => {
        console.log("got an error", error);
        this.showAlert(error.message);
      });
    console.log("Would sign in with ", this.user.value, this.password.value);
  }
  //const storingname: any;

  register() {
    this.navCtrl.push(RegisterPage);
  }
  resetpw() {
    this.navCtrl.push(ForgotpwPage);
  }
}
