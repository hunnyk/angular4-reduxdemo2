import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {Article, PHP_ARTICLES} from "../models/article.model";
import {ArticleState} from "../reducers/app.states";
import * as articleReducer from '../reducers/article.reducer';
import * as fromActions from '../actions/article.actions';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles:Observable<Article[]>

  constructor(private store:Store<ArticleState>) {
      this.articles=store.select(articleReducer.getArticles);
  }

  ngOnInit() {
  }

  showJavaArticles(){
    this.store.dispatch(new fromActions.JavaArticlesAction());
  }

  showAngularArticles(){
    this.store.dispatch(new fromActions.AngularArticlesAction());
  }

  showPhpArticles(){
    this.store.dispatch(new fromActions.PhpArticlesAction(PHP_ARTICLES));
  }
}
