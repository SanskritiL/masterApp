import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HomePage } from "../home/home";
import { AngularFireList } from "angularfire2/database";
import { AngularFireDatabase } from "angularfire2/database";
import firebase from "firebase";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  QuizCode,
  Users,
  Questions
} from "../../models/quizcodeitem/quizcode.interface";
import { LoginPage } from "../login/login";
/**
 * Generated class for the NewmodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-newmode",
  templateUrl: "newmode.html"
})
export class NewmodePage {
  items: any;
  admin = "";
  i = 0;
  nickname = "";
  users = {} as Users;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public fire: AngularFireAuth
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad NewmodePage");

    this.admin = this.navParams.get("users");
    console.log(this.admin);
    this.getnickname();
  }
  getnickname() {
    this.db
      .list("users")
      .valueChanges()
      .subscribe(data => {
        this.items = data;
        for (this.i = 0; this.i < 3; this.i++) {
          if (data[this.i]["email"] == this.admin) {
            console.log(data[this.i]["nickname"]);
            this.nickname = data[this.i]["nickname"];
          }
        }
      });
  }
  taketohome() {
    console.log("pass huda home page ma");
    console.log(this.nickname);
    this.navCtrl.push(HomePage, { users: this.nickname });
  }
}
