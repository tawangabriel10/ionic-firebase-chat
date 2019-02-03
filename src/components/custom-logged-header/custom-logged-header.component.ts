import { App, MenuController } from 'ionic-angular';
import { AuthService } from './../../providers/auth.service';
import { AlertController } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'custom-logged-header',
  templateUrl: 'custom-logged-header.component.html'
})
export class CustomLoggedHeaderComponent extends BaseComponent {

  @Input() title: string;

  constructor(
    public alertCtrl: AlertController,
    public authService: AuthService,
    public app: App,
    public menuCtrl: MenuController
  ) {
    super(alertCtrl, authService, app, menuCtrl);
    console.log('Hello CustomLoggedHeaderComponent Component');
    this.title = 'Hello World';
  }

}
