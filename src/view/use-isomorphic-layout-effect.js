// @flow
// eslint-disable-next-line no-restricted-imports
import { useLayoutEffect, useEffect } from 'react';
import { globalRef } from './global-ref';

// https://github.com/reduxjs/react-redux/blob/v7-beta/src/components/connectAdvanced.js#L35
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect because we want
// `connect` to perform sync updates to a ref to save the latest props after
// a render is actually committed to the DOM.
const useIsomorphicLayoutEffect =
  typeof globalRef._window !== 'undefined' &&
  typeof globalRef._window.document !== 'undefined' &&
  typeof globalRef._window.document.createElement !== 'undefined'
    ? useLayoutEffect
    : useEffect;

export default useIsomorphicLayoutEffect;
