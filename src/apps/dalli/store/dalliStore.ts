import { create } from "zustand"

interface DalliState {
  category: string
  tiles: number
  autoDrawDelay: number
  setCategory: (newCategory: string) => void
  setTiles: (newTiles: number) => void
  setAutoDrawDelay: (autoDrawDelay: number) => void
}
export const useDalliStore = create<DalliState>((set) => ({
  category: "Tiere",
  tiles: 160,
  autoDrawDelay:1,
  setCategory: (newCategory: string) => set(() => ({ category: newCategory })),
  setTiles: (newTiles: number) => set(() => ({ tiles: newTiles })),
  setAutoDrawDelay: (newAutoDrawDelay: number) =>
    set(() => ({ autoDrawDelay: newAutoDrawDelay })),
}))
