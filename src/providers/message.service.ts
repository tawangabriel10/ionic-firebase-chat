import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Message } from '../models/message.model';
import { BaseService } from './base.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessageService extends BaseService {

  private limit: BehaviorSubject<number> = new BehaviorSubject<number>(10);

  constructor(
    public af: AngularFire,
    public http: Http
  ) {
    super();
    this.limit.next(this.limit.getValue());
  }

  create(message: Message, listMessages: FirebaseListObservable<Message[]>): firebase.Promise<void> {
    return listMessages.push(message)
      .catch(this.handlePromiseError);
  }

  getMessages(userId1: string, userId2: string): FirebaseListObservable<Message[]> {
    return <FirebaseListObservable<Message[]>>this.af.database.list(`/messages/${userId1}-${userId2}`, {
      query: {
        orderByChild: 'timestamp',
        limitToLast: 30
      }
    }).catch(this.handleObservableError);
  }

}
