import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';

import { AuthService } from '../providers/auth.service';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from './../pages/signup/signup';
import { UserService } from '../providers/user.service';

const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyByARxGM_H8obBudC2wymar8SJuZMuUCJs",
  authDomain: "ionic2-firebase-chat-50259.firebaseapp.com",
  databaseURL: "https://ionic2-firebase-chat-50259.firebaseio.com",
  storageBucket: "ionic2-firebase-chat-50259.appspot.com",
  messagingSenderId: "871214938635"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    UserService, 
    AuthService
  ]
})
export class AppModule {}
