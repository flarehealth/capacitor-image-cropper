export interface CapacitorImageCropperPlugin {
  crop(options: CropOptions): Promise<{ imgPath: string }>;
}

export interface CropOptions {
  uri: string
}