import { GestureResponderEvent } from 'react-native';

export type TStringOrNull = string | null;
export type TStringOrUndefined = string | undefined;
export type TNumberOrNull = number | null;

export type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

export type TOnPress = (e?: GestureResponderEvent) => void;
