import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the CongratsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-congrats",
  templateUrl: "congrats.html"
})
export class CongratsPage {
  fullmarks = 0;
  obtainedmarks = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.fullmarks = this.navParams.get("full");
    this.obtainedmarks = this.navParams.get("obtained");

    console.log("ionViewDidLoad CongratsPage");
  }
}
