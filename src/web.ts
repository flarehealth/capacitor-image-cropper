import { WebPlugin } from '@capacitor/core';

import type { CapacitorImageCropperPlugin, CropOptions } from './definitions';

export class CapacitorImageCropperWeb extends WebPlugin implements CapacitorImageCropperPlugin {
  async crop(options: CropOptions): Promise<{ imgPath: string }> {
    console.log('this function is not available on the web', options);
    return {
      imgPath: ""
    };
  }
}
