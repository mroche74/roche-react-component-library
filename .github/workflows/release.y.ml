name: MainPush

on:
  release:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          node-version: 20
          registry-url: https://npm.pkg.github.com/
          scope: '@sdi-one-core'

      - name: Install NPM Packages
        env:
          NODE_AUTH_TOKEN: ${{ secrets.DEVOPS_BOT_TOKEN }}
        run: npm ci

      - name: Build NPM Packages
        run: npm run build

      - name: Publish Package to GitHub Package Registry
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NODE_AUTH_TOKEN: ${{secrets.GITHUB_TOKEN}}
        run: npx semantic-release