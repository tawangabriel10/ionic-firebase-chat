import { NavController, AlertController, App, MenuController } from "ionic-angular";
import { OnInit } from "@angular/core";

import { AuthService } from '../providers/auth.service';
import { SigninPage } from '../pages/signin/signin';

export abstract class BaseComponent implements OnInit {

    protected navCtrl: NavController;

    constructor(
        public alertCtrl: AlertController,
        public authService: AuthService,
        public app: App,
        public menuCtrl: MenuController
    ) {

    }

    ngOnInit() {
        this.navCtrl = this.app.getActiveNav();
    }

    onLogout(): void {
        this.alertCtrl.create({
            message: "Do you leave?",
            buttons: [
                {
                    text: 'Yes',
                    handler: () => {
                        this.authService.logout()
                            .then(() => {
                                this.navCtrl.setRoot(SigninPage);
                            });
                    }
                },{
                    text: 'No'
                }
            ]
        }).present();
    }
}