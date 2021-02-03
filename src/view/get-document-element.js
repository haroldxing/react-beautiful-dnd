// @flow
import { invariant } from '../invariant';
import { globalRef } from './global-ref';

export default (): HTMLElement => {
  const doc: ?HTMLElement = globalRef._document.documentElement;
  invariant(doc, 'Cannot find document.documentElement');
  return doc;
};
