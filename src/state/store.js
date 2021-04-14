import create from "zustand";
import { Vector3 } from "three";

const useStore = create((set) => ({
  lightPosition: [15, 50, 7],
  setLightPosition: (lightPos) => set({ lightPosition: lightPos }),
}));

export default useStore;
