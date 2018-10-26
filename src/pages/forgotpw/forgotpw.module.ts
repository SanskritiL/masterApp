import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotpwPage } from './forgotpw';
//repo
@NgModule({
  declarations: [
    ForgotpwPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgotpwPage),
  ],
})
export class ForgotpwPageModule {}
