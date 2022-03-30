import { registerPlugin } from '@capacitor/core';

import type { CapacitorImageCropperPlugin } from './definitions';

const CapacitorImageCropper = registerPlugin<CapacitorImageCropperPlugin>('CapacitorImageCropper', {
  web: () => import('./web').then(m => new m.CapacitorImageCropperWeb()),
});

export * from './definitions';
export { CapacitorImageCropper };
