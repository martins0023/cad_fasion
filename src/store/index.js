import { proxy } from "valtio";

const state = proxy({
    intro: false,
    color: '#E2C0D9',
    isLogoTexture: true,
    isFullTexture: true,
    logoDecal: './vite.svg',
    fullDecal: './vite.svg',
});

export default state;