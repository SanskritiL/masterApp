import { Component,ViewChild } from '@angular/core';
import {  NavController, RadioButton } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { StudenthomePage } from '../studenthome/studenthome';

@Component({
  selector: 'page-mode',
  templateUrl: 'mode.html',
})
export class ModePage {
 mode: string; 
   
  constructor(public navCtrl: NavController) {
    this.mode="teacher";
  }
  
  

  
    continueToPage(){
      if(this.mode=="teacher"){
        this.navCtrl.push(TabsPage);
      }
      else{
        this.navCtrl.push(StudenthomePage);
      }
      
    }
}