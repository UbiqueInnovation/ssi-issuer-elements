# Contributing

## Development

The `index.html` serves for development and will not be included in the output.

### Install dependencies

```bash
pnpm install
```

### Run dev server

```bash
pnpm dev
```

## Adding a component

1. Create a file in the `lib/components` folder and write your `lit` component.
2. Create a file in the `lib` folder and import the components file. This file will be exposed to use the web component.
3. In the `lib/react.ts` file, export your `lit` class as a react component
4. In the `scripts/build.sh`, add your component to the build. The lib variable should be set to the name you chose in step 2 (without extension).

## Building for Production

```bash
pnpm build
```
