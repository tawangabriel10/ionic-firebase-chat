import { UserService } from './../../providers/user.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuthService } from './../../providers/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  messages: string[] = [];
  pageTitle: string;
  sender: User;
  recipient: User;

  constructor(
    public authService: AuthService,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userService: UserService
  ) {
  }

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  ionViewDidLoad() {
    this.recipient = this.navParams.get('recipientUser');
    this.pageTitle = this.recipient.name;
    this.userService.currentUser
      .first()
      .subscribe((currentUser: User) => {
        this.sender = currentUser;
      });
  }

  sendMessage(newMessage: string): void {
    this.messages.push(newMessage);
  }

}
