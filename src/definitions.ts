export interface CapacitorImageCropperPlugin {
  crop(options: { uri: string }): Promise<{ imgPath: string }>;
}
