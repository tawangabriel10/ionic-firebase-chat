import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuthService } from './../../providers/auth.service';
import { User } from '../../models/user.model';
import { UserService } from './../../providers/user.service';

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  currentUser: User;
  canEdit: boolean = false;
  uploadProgress: number;
  private filePhoto: File;

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
    this.userService.currentUser
      .subscribe((user: User) => {
        this.currentUser = user;
      })
  }

  onSave(): void {
    
    if (this.filePhoto) {
      
      let uploadTask = this.userService.uploadPhoto(this.filePhoto, this.currentUser.$key);

      uploadTask.on('state_changed', (snapshot) => {
        this.uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      }, (error: Error) => {

      }, () => {
        this.editUser(uploadTask.snapshot.downloadURL);
      });
    } else {
      this.editUser();
    }
  }

  onPhoto(event): void {
    this.filePhoto = event.target.files[0];
  }

  private editUser(photoUser?: string): void {
    this.userService
      .edit({
        name: this.currentUser.name,
        username: this.currentUser.username,
        photo: photoUser || this.currentUser.photo || ''
      }).then(() => {
        this.canEdit = false;
        this.filePhoto = undefined;
        this.uploadProgress = 0;
      });
  }

}
