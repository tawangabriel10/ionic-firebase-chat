import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule, FirebaseAppConfig, AuthProviders, AuthMethods } from 'angularfire2';

import { AuthService } from '../providers/auth.service';
import { CapitalizePipe } from './../pipes/capitalize.pipe';
import { ChatPage } from './../pages/chat/chat';
import { ChatService } from '../providers/chat.service';
import { CustomLoggedHeaderComponent } from '../components/custom-logged-header/custom-logged-header.component';
import { HomePage } from '../pages/home/home';
import { MessageBoxComponent } from '../components/message-box/message-box.component';
import { MessageService } from '../providers/message.service';
import { MyApp } from './app.component';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar.component';
import { SigninPage } from './../pages/signin/signin';
import { SignupPage } from './../pages/signup/signup';
import { UserInfoComponent } from '../components/user-info/user-info.component';
import { UserMenuComponent } from '../components/user-menu/user-menu.component';
import { UserProfilePage } from './../pages/user-profile/user-profile';
import { UserService } from '../providers/user.service';

const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyByARxGM_H8obBudC2wymar8SJuZMuUCJs",
  authDomain: "ionic2-firebase-chat-50259.firebaseapp.com",
  databaseURL: "https://ionic2-firebase-chat-50259.firebaseio.com",
  storageBucket: "ionic2-firebase-chat-50259.appspot.com",
  messagingSenderId: "871214938635"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Custom,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    CapitalizePipe,
    ChatPage,
    CustomLoggedHeaderComponent,
    HomePage,
    MessageBoxComponent,
    MyApp,
    ProgressBarComponent,
    SigninPage,
    SignupPage,
    UserInfoComponent,
    UserMenuComponent,
    UserProfilePage
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ChatPage,
    HomePage,
    MyApp,
    SigninPage,
    SignupPage,
    UserProfilePage
  ],
  providers: [
    AuthService, 
    ChatService,
    MessageService, 
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    UserService
  ]
})
export class AppModule {}
