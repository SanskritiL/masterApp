import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  AlertController,
  NavParams
} from "ionic-angular";
import { File } from "@ionic-native/file";
import { FileChooser } from "@ionic-native/file-chooser";

/**
 * Generated class for the GeneratequizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-generatequiz",
  templateUrl: "generatequiz.html"
})
export class GeneratequizPage {
  code = "";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private fileChooser: FileChooser,
    private file: File
  ) {
    this.code = this.navParams.get("code");
  }
  ionViewDidLoad() {}

  showAlert(message: string) {
    const alert = this.alertCtrl.create({
      title: "Action Needed",
      subTitle: message,

      buttons: [
        {
          text: "Upload ",
          handler: () => {
            this.uploadfromGallery();
          }
        },
        {
          text: "Camera",
          handler: () => {}
        }
      ]
    });
    alert.present();
  }

  attachpic() {
    this.showAlert("Select one: ");
  }
  uploadfromGallery() {
    this.fileChooser.open().then(uri => {
      alert(uri);
    });
  }
}
