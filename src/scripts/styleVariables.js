// src/utils/styleMixins.js
export const innerWidth = '1000px';
export const bpTab = '1000px';
export const bpSp = '767px';

export const vwPc = (size, viewport = 1920) => `${(size / viewport) * 100}vw`;
export const vwTab = (size, viewport = 768) => `${(size / viewport) * 100}vw`;
export const vwSp = (size, viewport = 320) => `${(size / viewport) * 100}vw`;
