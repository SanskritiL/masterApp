import { Component } from "@angular/core";
import { NavController, AlertController, NavParams } from "ionic-angular";
import { FormBuilder, FormArray, FormGroup, Validators } from "@angular/forms";
import {
  QuizCode,
  Users,
  Questions
} from "../../models/quizcodeitem/quizcode.interface";
import { AngularFireList } from "angularfire2/database";
import { AngularFireDatabase } from "angularfire2/database";
import { SubmitPage } from "../submit/submit";
@Component({
  selector: "page-homecreatequiz",
  templateUrl: "homecreatequiz.html"
})
export class HomecreatequizPage {
  quizCode = {} as QuizCode;
  questions = {} as Questions;
  questions$: AngularFireList<Questions>;
  i = 1;
  j = 0;
  z = 0;

  public form: FormGroup;
  constructor(
    public navCtrl: NavController,
    private databse: AngularFireDatabase,
    private _FB: FormBuilder,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    this.questions$ = this.databse.list("Questions");

    this.form = this._FB.group({
      name: ["", Validators.required],
      questions: this._FB.array([this.initQuestionsField()])
    });
  }

  ionViewDidLoad() {
    console.log("herum");
    let code = this.navParams.get("code");
    console.log(code);
  }

  initQuestionsField(): FormGroup {
    return this._FB.group({
      name: ["", Validators.required]
    });
  }

  addNewInputField(): void {
    const control = <FormArray>this.form.controls.questions;
    control.push(this.initQuestionsField());
    this.i = this.i + 1;
  }
  removeInputField(i: number): void {
    const control = <FormArray>this.form.controls.questions;
    control.removeAt(i);
  }

  showAlert(message: string) {
    const alert = this.alertCtrl.create({
      title: "Action Needed",
      subTitle: message,

      inputs: [
        {
          type: "radio",
          label: "Q/A",
          value: "Q/A"
        },
        {
          type: "radio",
          label: "Multiple Choice",
          value: "multipleChoice"
        },
        {
          type: "radio",
          label: "True/False",
          value: "truefalse"
        },
        {
          type: "radio",
          label: "Capture Image",
          value: "truefalse"
        },
        {
          type: "radio",
          label: "Attach media",
          value: "media"
        },
        {
          type: "radio",
          label: "Voice Record",
          value: "voicerecord"
        }
      ],
      buttons: [
        {
          text: "Apply",

          handler: data => {
            console.log("apply clicked");
          }
        }
      ]
    });
    alert.present();
  }

  submitQuiz(questions: Questions) {
    var code = this.navParams.get("code");
    console.log(code);
    for (var z = 0; z < this.i; z++) {
      console.log(questions[z]);
      this.questions$.push({
        code: code,
        question: questions[z]
      });
    }
    /**this.quizCode$.push({
     code: this.quizCode.code
  }); */
    this.navCtrl.setRoot(SubmitPage);
  }
  showOptions() {
    this.showAlert("Select Question type");
  }
  manage(val: any): void {
    //console.dir(val);
  }
}
