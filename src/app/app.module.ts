import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';

import {StoreModule} from '@ngrx/store';
import {reducers,metaReducers} from "./reducers/reducers";

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers,{metaReducers})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
