// @flow
import { invariant } from '../invariant';
import { globalRef } from './global-ref';

export default (): HTMLBodyElement => {
  const body: ?HTMLBodyElement = globalRef._document.body;
  invariant(body, 'Cannot find document.body');
  return body;
};
