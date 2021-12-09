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
  santaHeight: 23,
  santaSpeed: 0.2,
  animationDelay: 3,
  SNOWFLAKES: 30,
  snowHeight: 40,
}));

export default useStore;
