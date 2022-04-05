var capacitorCapacitorImageCropper = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
