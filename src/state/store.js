import create from "zustand";
import { Vector3 } from "three";

const useStore = create((set) => ({
  lightPosition: 15,
  setLightPos: (lightPos) => set({ lightPosition: lightPos }),
}));

export default useStore;
