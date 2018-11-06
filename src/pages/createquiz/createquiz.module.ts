import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatequizPage } from './createquiz';

@NgModule({
  declarations: [
    CreatequizPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatequizPage),
  ],
})
export class CreatequizPageModule {}
