import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { HomecreatequizPage } from "../homecreatequiz/homecreatequiz";
import { Input } from "@angular/core";
import { AngularFireList } from "angularfire2/database";
import { AngularFireDatabase } from "angularfire2/database";
import { QuizCode, Users } from "../../models/quizcodeitem/quizcode.interface";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { GeneratequizPage } from "../generatequiz/generatequiz";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  nick = "";
  //creating a new object
  quizCode = {} as QuizCode;
  users = {} as Users;
  homecreatequizPage = HomecreatequizPage;

  quizCode$: AngularFireList<QuizCode>;

  constructor(
    public navCtrl: NavController,
    private database: AngularFireDatabase,
    public navParams: NavParams
  ) {
    this.quizCode$ = this.database.list("quizcode");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad HomePage");

    this.nick = this.navParams.get("users");
    console.log("yo home page ma");
    console.log(this.nick);
  }
  onclick(quizCode: QuizCode) {
    //console.log(quizCode);
    this.navCtrl.push(GeneratequizPage, {
      code: quizCode.code,
      data: this.nick
    });

    //create a new Obj &push under code list
    /*this.quizCode$.push({
  code: this.quizCode.code
});
*/
  }
}
