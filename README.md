# Supertest

POC to test supertest. Using Open api [kitsu].

[![NPM Version][npm-image]][npm-url]

## Requirements

- [Node]
- [Supertest]
- [Mocha]
- [Chai]

## Installation

clone the project and run the command below.

```sh
npm install
```

### .env

Create a file at the root of the project with the name `.env`

| .env var | value                      |
| -------- | -------------------------- |
| HOST     | https://kitsu.io/api/edge/ |

## Running

| commands   | tests that are going to run |
| ---------- | --------------------------- |
| `npm test` | runs the only test          |

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[prettier]: https://prettier.io/
[eslint]: https://eslint.org/
[node]: https://nodejs.org/en/download
[kitsu]: https://kitsu.docs.apiary.io/
[chai]: https://www.chaijs.com/
[mocha]: https://mochajs.org/
[supertest]: https://www.npmjs.com/package/supertest
