import { App, MenuController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Component, Input } from '@angular/core';

import { AuthService } from './../../providers/auth.service';
import { BaseComponent } from '../base.component';
import { User } from './../../models/user.model';

@Component({
  selector: 'custom-logged-header',
  templateUrl: 'custom-logged-header.component.html'
})
export class CustomLoggedHeaderComponent extends BaseComponent {

  @Input() title: string;
  @Input() user: User;

  constructor(
    public alertCtrl: AlertController,
    public authService: AuthService,
    public app: App,
    public menuCtrl: MenuController
  ) {
    super(alertCtrl, authService, app, menuCtrl);
    this.title = 'Chats';
  }

}
