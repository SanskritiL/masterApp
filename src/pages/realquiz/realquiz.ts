import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireList } from "angularfire2/database";
import { AngularFireDatabase } from "angularfire2/database";
import firebase from "firebase";
import { CongratsPage } from "../congrats/congrats";
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
  index = 0;
  items: any;
  question = "";
  answer1 = "";
  answer2 = "";
  answer3 = "";
  answer4 = "";
  comment = "";
  k = 0;
  givenanswer = [];
  correctanswer = [];
  array = [];
  score = 0;
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
            this.array.push(data[this.i]);
            this.question = data[this.i]["question"];
            console.log(this.question);
            this.answer1 = data[this.i]["answer1"];
            this.answer2 = data[this.i]["answer2"];
            this.answer3 = data[this.i]["answer3"];
            this.answer4 = data[this.i]["answer4"];
            this.comment = data[this.i]["comment"];
            this.correctanswer.push(data[this.i]["correctanswer"]);
          }
        }
      });
  }
  toggle(i) {
    this.givenanswer.push(i);
  }
  submit() {
    while (this.k < this.correctanswer.length) {
      if (this.givenanswer[this.k] == this.correctanswer[this.k]) {
        this.score = this.score + 1;
      }
      this.k = this.k + 1;
    }
    console.log(this.correctanswer);
    console.log(this.givenanswer);
    console.log("score is" + this.score);

    this.navCtrl.setRoot(CongratsPage, {
      obtained: this.score,
      full: this.correctanswer.length
    });
  }
}
