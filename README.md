# capacitor-image-cropper

Image cropper for CapacitorJS (**iOS** and **Android** only)

## Why did we make this?

Flare Health could not find a working solution for both Android and iOS for cropping images that was seamless, looked good on both, and did what we needed to do. So we built our own.

## Consuming the Plugin

This repository builds a Node package that can be installed in other JavaScript applications. You can either install the version published in the `dist/` directory or point to the local version.

### Consuming the Published Version

```bash
yarn add git+https://github.com/flarehealth/capacitor-image-cropper.git
yarn run cap sync
```

### Consuming the Local Version

In order to make local development easier, you can add the local version of the plugin to another project. To do this you must clone the repo, make changes, and add the local version of the package to the consuming application.

```
yarn add file:</path/to/repository>
```

Every time you make changes, you must build the plugin for each platform and add the package again to your Capacitor project

## Using the Plugin

See [here][#usage-documentation] for details

## Updating the Plugin

Here are details for making changes to the plugin.

### Publishing Changes

To learn more about how to publish new changes, [see publishing documentation][#publishing-changes]

### Dependencies

 * Yarn

### Setup

1. Install Node packages

    ```bash
    yarn install
    ```

### iOS

Add new dependencies via Cocoapods:

    ```bash
    yarn run build:ios
    ```

Build the project:

    ```bash
    yarn run install:ios
    ```

### Android

Build project and run tests:

```
yarn run verify:android
```

## Sources

We utilized popular iOS and Android cropping libraries for their respective platforms.

### iOS

[TOCropViewController](https://github.com/TimOliver/TOCropViewController/)

### Android

[uCrop](https://github.com/Yalantis/uCrop)


[#publishing-changes]: /documentation/publishing.md
[#usage-documentation]: /documentation/usage.md
