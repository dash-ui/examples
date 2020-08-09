<hr/>

# design-system

> A design system created with [Dash](https://github.com/dash-ui) and [Storybook](https://github.com/storybookjs). [Check out my stories on Vercel](https://dash-design-system.now.sh/).

```sh
npm i design-system
```

---

## Quick start

```js
import {Text} from 'design-system'

export function App() {
  return <Text variant='heading'>Hello world</Text>
}
```

## Development

Here's what you need to know to start developing `design-system`.

### Scripts

#### `build`

Builds types, commonjs, and module distributions

#### `build-storybook`

Builds a production dist for [Storybook](https://github.com/storybookjs)

#### `check-types`

Runs a type check on the project using the local `tsconfig.json`

#### `dev`

Builds `module` and `cjs` builds in `watch` mode

#### `format`

Formats all of the applicable source files with prettier

#### `lint`

Runs `eslint` on the package source

#### `prerelease`

Runs before the package is published. This calls `validate` and `build` scripts.

#### `release`

Starts a release using `standard-version`. This must be run before `npm publish`.

#### `storybook`

Runs [Storybook](https://github.com/storybookjs) in `development` mode

#### `test`

Tests the package with `jest`

#### `validate`

Runs `check-types`, `lint`, and `test` scripts. This is used in CI and
in `prerelease`.

### Husky hooks

#### `pre-commit`

Runs `lint-staged` and the `build-types` script

#### `commit-msg`

Runs `commitlint` on your commit message. The easiest way
to conform to `standard-version` rules is to use [`cz-cli`](https://github.com/commitizen/cz-cli)

## Releases

To release the design system on npm:

```sh
yarn release
git push --follow-tags origin master
npm publish
```

## LICENSE

MIT
