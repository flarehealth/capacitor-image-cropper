import { registerPlugin } from '@capacitor/core';
const CapacitorImageCropper = registerPlugin('CapacitorImageCropper', {
    web: () => import('./web').then(m => new m.CapacitorImageCropperWeb()),
});
export * from './definitions';
export { CapacitorImageCropper };
//# sourceMappingURL=index.js.map