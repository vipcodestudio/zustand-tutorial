import { create } from 'zustand';

const useCount = create((set) => ({
  count: 2,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCount;
