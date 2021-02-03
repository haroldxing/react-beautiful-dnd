import { globalRef } from '../global-ref';

// @flow
export default (el: ?Element): typeof globalRef._window =>
  el && el.ownerDocument ? el.ownerDocument.defaultView : globalRef._window;
