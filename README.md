# @sadcitizen/eslint-config

[![Build Status](https://travis-ci.org/sadcitizen/eslint-config.svg?branch=master)](https://travis-ci.org/sadcitizen/eslint-config)

> Configuration for Eslint

## Install

```
$ npm install @sadcitizen/eslint-config
```

## Usage

### Basic

`.eslintrc`:

```json
{
  "extends": "@sadcitizen/eslint-config"
}
```

### React, React Hooks and Jest

`.eslintrc`:

```json
{
  "extends": [
      "@sadcitizen/eslint-config",
      "@sadcitizen/eslint-config/react",
      "@sadcitizen/eslint-config/react-hooks",
      "@sadcitizen/eslint-config/jest"
  ]
}
```
