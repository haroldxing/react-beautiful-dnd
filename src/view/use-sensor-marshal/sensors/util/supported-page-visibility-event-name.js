// @flow
import { find } from '../../../../native-with-fallback';
import { globalRef } from '../../../global-ref';

const supportedEventName: string = ((): string => {
  const base: string = 'visibilitychange';

  // Server side rendering
  if (typeof globalRef._document === 'undefined') {
    return base;
  }

  // See https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
  const candidates: string[] = [
    base,
    `ms${base}`,
    `webkit${base}`,
    `moz${base}`,
    `o${base}`,
  ];

  const supported: ?string = find(
    candidates,
    (eventName: string): boolean => `on${eventName}` in globalRef._document,
  );

  return supported || base;
})();

export default supportedEventName;
