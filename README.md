# NodeJs monorepo POC using Lerna

## About App

- The root app contains three sub package `app1,app2,common`.
- `common` is an util code of `isEven` function sharing between `app1,app2`.
- `app1`,`app2` listening on port `8080`,`8081` respectively.
- Both accepting numeric query `a` and `b`.
- `app1` return addition of `a` and `b` and check is result is even, returns an object of results.
- `app2` return substraction of `a` and `b` and check is result is even, returns an object of results.

## Start

- Connect all packages `npm run bootstrap`.
- Start app `npm start`.
