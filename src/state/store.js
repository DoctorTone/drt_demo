import create from "zustand";
import { Vector3 } from "three";

const useStore = create((set) => ({
  lightPosition: [15, 50, 7],
  setLightPosition: (lightPos) => set({ lightPosition: lightPos }),
  lightAngle: 0.45,
  setLightAngle: (angle) => set({ lightAngle: angle }),
  lightIntensity: 2.0,
  setLightIntensity: (intensity) => set({ lightIntensity: intensity }),
  shadowsEnabled: true,
  setShadows: (enabled) => set({ shadowsEnabled: enabled }),
}));

export default useStore;
