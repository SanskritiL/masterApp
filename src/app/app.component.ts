import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Icon } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ModePage } from '../pages/mode/mode';
import { HomePage } from '../pages/home/home';
import { HomecreatequizPage } from '../pages/homecreatequiz/homecreatequiz';
//repo
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = LoginPage;
  @ViewChild(Nav) nav: Nav;

  pages: Array<{ title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) { 
    this.initializeApp();

    this.pages = [
      {title: 'Logout', component:LoginPage, icon:'md-log-out'},
      {title: 'About Us', component:AboutPage, icon:'md-eye'},
      {title: 'Contact Us', component:ContactPage, icon:'md-contacts'},
      {title: 'Home', component:HomePage, icon:'md-home'}
    ];
      
      
    
    }
    initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPage(page){
    this.nav.setRoot(page.component);
  }
}
