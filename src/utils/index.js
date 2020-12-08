import { useDidMounted } from './hooks/useDidMounted';

const pixelToViewportWidth = (size, width = 1440) => `${(size / width) * 100}vw`;

export { pixelToViewportWidth, useDidMounted };
