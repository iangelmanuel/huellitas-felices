import { create } from 'zustand'

interface PetState {
  isDog: boolean
}

export const PetStore = create<PetState>()(set => ({
  isDog: true,
  setIsDog: (isDog: boolean) => set({ isDog }),
}))
