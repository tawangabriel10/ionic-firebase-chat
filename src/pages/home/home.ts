import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2';
import { User } from '../../models/user.model';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: FirebaseListObservable<User[]>;

  constructor(
    public userService: UserService,
    public navCtrl: NavController
  ) {
    
  }

  ionViewDidLoad() {
    this.users = this.userService.users;
  }

  onSignup(): void {
    this.navCtrl.push(SignupPage);
  }

  onChatCreate(user: User): void {

  }

}
