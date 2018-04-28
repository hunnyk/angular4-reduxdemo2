import { createFeatureSelector, createSelector } from '@ngrx/store';
import {ArticleState} from "./app.states";
import * as fromActions from "../actions/article.actions";
import {ANGULAR_ARTICLES, JAVA_ARTICLES, PHP_ARTICLES} from "../models/article.model";

export const initialState:ArticleState={articles:[]};

export function reducer(state=initialState, action:fromActions.All):ArticleState {
  switch(action.type) {
    case fromActions.JAVA:{
      return {articles:JAVA_ARTICLES}
    }

    case fromActions.ANGULAR:{
      return {articles:ANGULAR_ARTICLES}
    }

    case fromActions.PHP:{
      return {articles:PHP_ARTICLES}
    }

    default:{
      return state;
    }
  }
}

export const getArticleState=createFeatureSelector<ArticleState>('articleState');

export const getArticles=createSelector(
  getArticleState,
  (state:ArticleState)=>state.articles
)

