import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import {
  QuizCode,
  Users,
  Questions,
  MainContent
} from "../../models/quizcodeitem/quizcode.interface";
//importing modules in component that will help us to gnerate dynamic forms
import { FormBuilder, FormArray, FormGroup, Validators } from "@angular/forms";
import { AngularFireList } from "angularfire2/database";
import { controlNameBinding } from "@angular/forms/src/directives/reactive_directives/form_control_name";
import { NewmodePage } from "../newmode/newmode";
/**
 * Generated class for the CreatequizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-createquiz",
  templateUrl: "createquiz.html"
})
export class CreatequizPage {
  public form: FormGroup;
  public formsmall: FormGroup;
  j = 0;
  u = 0;
  correctanswer = 0;
  correctanswers = [];
  counter = 1;
  code = this.navParams.get("code");
  nickname = this.navParams.get("nickname");

  maincontent = {} as MainContent;
  maincontent$: AngularFireList<MainContent>;

  @ViewChild("mainquestion")
  MainQuestion;

  @ViewChild("maincomment")
  MainComment;

  @ViewChild("num1")
  Num1: any;

  @ViewChild("num2")
  Num2;
  @ViewChild("num3")
  Num3;
  @ViewChild("num4")
  Num4;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _FB: FormBuilder,
    public alertCtrl: AlertController,
    public db: AngularFireDatabase
  ) {
    this.maincontent$ = db.list("quizcontent");
    //define the formgroup object for the form with subgroup objets for handling dynamically generated form input fields
    this.form = this._FB.group({
      questions: this._FB.array([this.initquestionField()])
    });
  }

  //creating a method initquestionFields that generates a form group object with input field
  initquestionField() {
    return this._FB.group({
      question: ["", Validators.required],
      comment: ["", Validators.required],
      answer1: ["", Validators.required],
      answer2: ["", Validators.required],
      answer3: ["", Validators.required],
      answer4: ["", Validators.required]
    });
  }

  //programmetically generates a new technology input field
  add() {
    const control = <FormArray>this.form.controls.questions;
    control.push(this.initquestionField());
    this.correctanswers[this.counter - 1] = this.correctanswer;

    this.counter++;
  }

  remove(i: number) {
    const control = <FormArray>this.form.controls.questions;
    control.removeAt(i);
    this.counter--;
    this.correctanswers.pop();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CreatequizPage");
  }

  togglecheckbox(x: any) {
    this.correctanswer = x - 1;
  }

  manage(val: any): void {
    console.log("yaha bata");
    this.correctanswers.push(this.correctanswer);
    for (this.j = 0; this.j < this.counter; this.j++) {
      this.maincontent$.push({
        code: this.code,
        question: val["questions"][this.j]["question"],
        comment: val["questions"][this.j]["comment"],
        answer1: val["questions"][this.j]["answer1"],
        answer2: val["questions"][this.j]["answer2"],
        answer3: val["questions"][this.j]["answer3"],
        answer4: val["questions"][this.j]["answer4"],
        correctanswer: this.correctanswers[this.j]
      });
    }

    this.presentAlert();
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: "Great!",
      subTitle: "Your quiz has been created",
      buttons: [
        {
          text: "Ok"
        },
        {
          text: "View My Quiz",
          handler: () => {
            this.navCtrl.setRoot(NewmodePage, { nickol: this.nickname });
          }
        }
      ]
    });
    alert.present();
  }
}
