import { CProduct } from '@models/product.model';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type TProductState = {
  products: Array<CProduct>;
  product: CProduct | null;
  isLoading: boolean;
  isLoadingDetails: boolean;
};

export type TProductAction = {
  reset: () => void;
};

const initialState: TProductState = {
  products: [],
  product: null,
  isLoading: false,
  isLoadingDetails: false,
};

const useProductStore = create<TProductState & TProductAction>()(
  immer((set) => ({
    ...initialState,
    reset: () => {
      set(initialState);
    },
  })),
);

export default useProductStore;
