import { WebPlugin } from '@capacitor/core';
import type { CapacitorImageCropperPlugin, CropOptions } from './definitions';
export declare class CapacitorImageCropperWeb extends WebPlugin implements CapacitorImageCropperPlugin {
    crop(options: CropOptions): Promise<{
        imgPath: string;
    }>;
}
