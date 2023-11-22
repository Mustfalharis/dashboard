import { create } from "zustand";
export const useAppStore = create((set) => ({
  searchKey: "",
  setSearchKey: (searchKey) => set({ searchKey }),
}));