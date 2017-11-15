import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemsDetailComponent } from './items/items-detail/items-detail.component';
import { ItemsFormComponent } from './items/items-form/items-form.component';

// Firebase Import
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';


@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemsDetailComponent,
    ItemsFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
