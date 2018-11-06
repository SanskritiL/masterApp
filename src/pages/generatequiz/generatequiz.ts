import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  AlertController,
  NavParams,
  DateTime
} from "ionic-angular";
import { Platform } from "ionic-angular";
import { File } from "@ionic-native/file";
import { FileChooser } from "@ionic-native/file-chooser";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { storage } from "firebase";
import {
  QuizCode,
  Users,
  Questions,
  QuizInfo
} from "../../models/quizcodeitem/quizcode.interface";
import { CreatequizPage } from "../createquiz/createquiz";

@IonicPage()
@Component({
  selector: "page-generatequiz",
  templateUrl: "generatequiz.html"
})
export class GeneratequizPage {
  quizinfo = {} as QuizInfo;
  quizinfo$: AngularFireList<QuizInfo>;
  code = "";
  nickname = "";
  dt = new Date().toLocaleDateString();

  quiztopic: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private fileChooser: FileChooser,
    private file: File,
    public platform: Platform,
    private camera: Camera,
    db: AngularFireDatabase
  ) {
    this.quizinfo$ = db.list("quizinfo");
    this.code = this.navParams.get("code");
    this.nickname = this.navParams.get("data");
    console.log("this.nickname");
    console.log(this.dt);
  }

  sendtodb() {
    console.log(this.quiztopic);
    const quizinfoRef = this.quizinfo$.push({
      date: this.dt,
      code: this.code,
      nickname: this.nickname,
      quiztopic: this.quiztopic
    });
    this.navCtrl.push(CreatequizPage, {
      code: this.code,
      quiztopic: this.quiztopic
    });
  }
}
