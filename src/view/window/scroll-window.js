// @flow
import { type Position } from 'css-box-model';
import { globalRef } from '../global-ref';

// Not guarenteed to scroll by the entire amount
export default (change: Position): void => {
  globalRef._window.scrollBy(change.x, change.y);
};
