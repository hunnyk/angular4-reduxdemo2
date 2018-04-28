import {Article} from "../models/article.model";

export interface AppState {
  articleState:ArticleState
}

export interface ArticleState{
  articles:Article[];
}
