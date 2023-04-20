# NodeJs monorepo POC using Lerna

## About App

- The root app contains three sub package `app1,app2,common`.
- `common` is an util code of `isEven` function sharing between `app1,app2`.
- `app1`,`app2` listening on port `8080`,`8081` respectively.
- Both accepting numeric query `a` and `b`.
- `app1` return addition of `a` and `b` and check is result is even, returns an object of results.
- `app2` return substraction of `a` and `b` and check is result is even, returns an object of results.
- `app1` and `app2` behave like independent app, if one of them breaks it would not break all apps.

## Start

- Install deps `npm install`
- Connect all packages `npm run bootstrap`.
- Start app `npm start`.

## Reference
- [Lerna Official](https://lerna.js.org/docs/getting-started)
