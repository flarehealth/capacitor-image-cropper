'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CapacitorImageCropper = core.registerPlugin('CapacitorImageCropper', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorImageCropperWeb()),
});

class CapacitorImageCropperWeb extends core.WebPlugin {
    async crop(options) {
        console.log('this function is not available on the web', options);
        return {
            imgPath: ""
        };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorImageCropperWeb: CapacitorImageCropperWeb
});

exports.CapacitorImageCropper = CapacitorImageCropper;
//# sourceMappingURL=plugin.cjs.js.map
