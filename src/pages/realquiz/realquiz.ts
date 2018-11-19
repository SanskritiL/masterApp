import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireList } from "angularfire2/database";
import { AngularFireDatabase } from "angularfire2/database";
import firebase from "firebase";
/**
 * Generated class for the RealquizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-realquiz",
  templateUrl: "realquiz.html"
})
export class RealquizPage {
  codeVal = "";
  count = 0;
  i = 0;

  items: any;
  question = "";
  answer1 = "";
  answer2 = "";
  answer3 = "";
  answer4 = "";
  comment = "";
  correctanswer = "";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase
  ) {
    this.db
      .list("quizcontent")
      .valueChanges()
      .subscribe(data => {
        this.show(data.length);
      });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad RealquizPage");
    console.log(this.count);
  }

  show(number: any) {
    console.log("yo ho ");
    console.log(number);
    this.codeVal = this.navParams.get("code");

    this.db
      .list("quizcontent")
      .valueChanges()
      .subscribe(data => {
        for (this.i = 0; this.i < number; this.i++) {
          if (data[this.i]["code"] == this.codeVal) {
            this.items = data[this.i];
            this.question = data[this.i]["question"];
            console.log(this.question);
            this.answer1 = data[this.i]["answer1"];
            this.answer2 = data[this.i]["answer2"];
            this.answer3 = data[this.i]["answer3"];
            this.answer4 = data[this.i]["answer4"];
            this.comment = data[this.i]["comment"];
          }
        }
      });
  }
}
