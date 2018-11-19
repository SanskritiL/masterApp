import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { SettingsPage } from "../pages/settings/settings";
import { HomecreatequizPage } from "../pages/homecreatequiz/homecreatequiz";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { ModePage } from "../pages/mode/mode";
import { ForgotpwPage } from "../pages/forgotpw/forgotpw";
import { StudenthomePage } from "../pages/studenthome/studenthome";
import { NewmodePage } from "../pages/newmode/newmode";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "angularfire2/auth";
import { SubmitPage } from "../pages/submit/submit";
import { GeneratequizPage } from "../pages/generatequiz/generatequiz";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AuthServiceProvider } from "../providers/auth-service/auth-service";
import { File } from "@ionic-native/file";
import { FileChooser } from "@ionic-native/file-chooser";
import { storage } from "firebase";
import { Camera } from "@ionic-native/camera";
import { CreatequizPage } from "../pages/createquiz/createquiz";
import { RealquizPage } from "../pages/realquiz/realquiz";
import { CongratsPage } from "../pages/congrats/congrats";

const firebaseAuth = {
  apiKey: "AIzaSyAxmfAkO59ADMlC2ro6a3pz8wQhjpE5AhI",
  authDomain: "quizy-cb7dc.firebaseapp.com",
  databaseURL: "https://quizy-cb7dc.firebaseio.com",
  projectId: "quizy-cb7dc",
  storageBucket: "quizy-cb7dc.appspot.com",
  messagingSenderId: "640099974765"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingsPage,
    HomecreatequizPage,
    LoginPage,
    RegisterPage,
    ModePage,
    StudenthomePage,
    ForgotpwPage,
    SubmitPage,
    NewmodePage,
    GeneratequizPage,
    CreatequizPage,
    RealquizPage,
    CongratsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingsPage,
    HomecreatequizPage,
    LoginPage,
    RegisterPage,
    ModePage,
    StudenthomePage,
    ForgotpwPage,
    SubmitPage,
    NewmodePage,
    GeneratequizPage,
    CreatequizPage,
    RealquizPage,
    CongratsPage
    //new comment to see
  ],
  //repo
  providers: [
    StatusBar,
    SplashScreen,
    FileChooser,
    Camera,
    File,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthServiceProvider
  ]
})
export class AppModule {}
