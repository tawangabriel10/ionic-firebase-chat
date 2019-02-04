import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFire } from 'angularfire2';

import { BaseService } from './base.service';
import { Chat } from './../models/chat.model';

@Injectable()
export class ChatProvider extends BaseService {

  constructor(
    public af: AngularFire,
    public http: Http
  ) {
    super();
  }

  create(chat: Chat, userId1: string, userid2: string): void {
    this.af.database.object(`/chats/${userId1}/${userid2}`)
      .set(chat)
      .catch(this.handlePromiseError);
  }

}
