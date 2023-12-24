import { create } from "zustand"

interface DalliState {
  category: string
  tiles: number
  setCategory: (newCategory: string) => void
  setTiles: (newTiles: number) => void
}
export const useDalliStore = create<DalliState>((set) => ({
  category: "Tiere",
  tiles: 160,
  setTiles: (newTiles: number) => set(() => ({ tiles:newTiles })),
  setCategory: (newCategory: string) => set(() => ({ category: newCategory })),
}))
