import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
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
    private _FB: FormBuilder
  ) {
    //define the formgroup object for the form with subgroup objets for handling dynamically generated form input fields
    this.form = this._FB.group({
      name: ["", Validators.required],
      questions: this._FB.array([this.initquestionField()])
    });

    this.formsmall = this._FB.group({
      answers: this._FB.array([this.initanswerField()])
    });
  }
  initanswerField() {
    return this._FB.group({});
  }
  //creating a method initquestionFields that generates a form group object with input field
  initquestionField() {
    return this._FB.group({
      name: ["", Validators.required]
    });
  }
  addanswers() {
    const control = <FormArray>this.formsmall.controls.answers;
    control.push(this.initanswerField());
  }
  removeanswers(i: number) {
    const control = <FormArray>this.formsmall.controls.answers;
    control.removeAt(i);
  }
  //programmetically generates a new technology input field
  add() {
    const control = <FormArray>this.form.controls.questions;
    control.push(this.initquestionField());
    this.counter++;
  }

  remove(i: number) {
    const control = <FormArray>this.form.controls.questions;
    control.removeAt(i);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CreatequizPage");
  }

  submit(questions: Questions) {
    console.log("submitted");
    for (this.u = 0; this.u < this.counter; this.u++) {
      const control = <FormArray>this.form.controls.questions[this.u];

      console.log(this.MainQuestion.value);
      console.log(this.MainComment.value);
      console.log(this.Num1.nativeElement.value);
      console.log(this.Num2.nativeElement.value);
      console.log(this.Num3.nativeElement.value);
      console.log(this.Num4.nativeElement.value);
    }
  }
  manage(val: any): void {
    console.dir(val);
  }
}
