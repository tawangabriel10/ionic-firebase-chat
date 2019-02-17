import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';

import { AuthService } from './../../providers/auth.service';
import { SignupPage } from './../signup/signup';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  signinForm: FormGroup;

  constructor(
    public alertCtrl: AlertController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {

    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.signinForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin(): void {
    let loading = this.showLoading();
    let formUser = this.signinForm.value;

    this.authService.signWithEmail(formUser)
      .then((isLogged: boolean) => {
        if (isLogged) {
          this.navCtrl.setRoot(HomePage);
          loading.dismiss();
        }
      }).catch((error: any) => {
        console.log(error);
        loading.dismiss();
        this.showAlert(error);
      });
  }

  onSignup(): void {
    this.navCtrl.push(SignupPage);
  }

  private showLoading(): Loading {
    let loading:Loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
    return loading;
  }

  private showAlert(message: string): void {
    this.alertCtrl.create({
      message: message,
      buttons: ['Ok']
    }).present();
  }

  onHomePage(): void {
    this.navCtrl.push(HomePage);/*
      .then((hasAccess: boolean) => {

      }).catch((error: any) => {
        
      });*/
  }

  onLogout(): void {
    this.authService.logout();
  }
}
