# capacitor-image-cropper

Image cropper for CapacitorJS (**iOS** and **Android** only)

## Why did we make this? 

Flare Health could not find a working solution for both Android and iOS for cropping images that was seamless, looked good on both, and did what ne needed to do. So we build our own. 

## Install

```bash
yarn add git+https://github.com/flarehealth/capacitor-image-cropper.git
yarn run cap sync
```

## Developing Locally

If you'd like to develop and improve this locally, you must clone the repo, make changes, and add the package locally

**Example**

```
yarn add file:<path/to/folder>
```

Everytime you make changes, you must build the plugin for each platform and add the package again to your Capacitor project

### iOS

```
yarn run install:ios// Only if you added a pod dependency to the project
yarn run build:ios
```

### Android

```
yarn run verify:android
```

## API

<docgen-index>

* [`crop(...)`](#crop)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### crop(...)

```typescript
crop(options: CropOptions) => Promise<{ imgPath: string; }>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#cropoptions">CropOptions</a></code> |

**Returns:** <code>Promise&lt;{ imgPath: string; }&gt;</code>

--------------------


### Interfaces


#### CropOptions

| Prop      | Type                |
| --------- | ------------------- |
| **`uri`** | <code>string</code> |

</docgen-api>

## Sources

We utilized popular iOS and Android cropping libraries for their respective platforms. 

### iOS

[TOCropViewController](https://github.com/TimOliver/TOCropViewController/)

### Android

[uCrop](https://github.com/Yalantis/uCrop)