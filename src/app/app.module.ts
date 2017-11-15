import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemsDetailComponent } from './items/items-detail/items-detail.component';
import { ItemsFormComponent } from './items/items-form/items-form.component';

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
