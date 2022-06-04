# Publishing Changes

Once you're finished making edits and are ready to publish them (not to npm, but to Github), you must build the plugins and them push them to Github.

```bash
yarn run verify
yarn run build
```

You _must_ commit the `/dist` folder that `npm run build` outputs in order to add this package to your `package.json`, otherwise, it will not resolve and result in build errors.
