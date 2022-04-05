import { WebPlugin } from '@capacitor/core';
export class CapacitorImageCropperWeb extends WebPlugin {
    async crop(options) {
        console.log('this function is not available on the web', options);
        return {
            imgPath: ""
        };
    }
}
//# sourceMappingURL=web.js.map