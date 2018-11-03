import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewmodePage } from './newmode';

@NgModule({
  declarations: [
    NewmodePage,
  ],
  imports: [
    IonicPageModule.forChild(NewmodePage),
  ],
})
export class NewmodePageModule {}
