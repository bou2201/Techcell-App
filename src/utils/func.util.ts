import { WithSelectors } from '@type/common.type';
import { StoreApi, UseBoundStore } from 'zustand';

/**
 * Auto generate state and action from zustand store
 * 
 * @param _store
 * @returns {WithSelectors<S>}
 */
export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(_store: S) => {
  let store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (let k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};
