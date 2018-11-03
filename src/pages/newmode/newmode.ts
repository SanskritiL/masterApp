import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HomePage } from "../home/home";
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad NewmodePage");
  }
  taketohome() {
    this.navCtrl.push(HomePage);
  }
}
