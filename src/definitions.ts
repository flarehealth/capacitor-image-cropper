export interface CapacitorImageCropperPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
