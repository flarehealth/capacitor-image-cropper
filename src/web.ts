import { WebPlugin } from '@capacitor/core';

import type { CapacitorImageCropperPlugin } from './definitions';

export class CapacitorImageCropperWeb extends WebPlugin implements CapacitorImageCropperPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
