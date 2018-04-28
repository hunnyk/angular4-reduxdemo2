import {Action} from '@ngrx/store';
import {Article} from "../models/article.model";

export const JAVA='java';
export const ANGULAR='angular';
export const PHP='php';

export class JavaArticlesAction implements Action {
    readonly type=JAVA;
}

export class AngularArticlesAction implements Action {
  readonly type=ANGULAR;
}

export class PhpArticlesAction implements Action {
  readonly type=PHP;

  constructor(public payload:Article[]) {}
}

export type All=JavaArticlesAction | AngularArticlesAction | PhpArticlesAction;
