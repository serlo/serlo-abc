import * as React from 'react';
export type Optional<T> = T | undefined;

export type ReactRenderReturn =
  | JSX.Element
  | JSX.Element[]
  | React.ReactPortal
  | string
  | number
  | null
  | false;
