import { Component } from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as  firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string ;

  constructor() {

  }

}
