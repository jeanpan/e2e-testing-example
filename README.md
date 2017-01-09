[![Build Status](https://travis-ci.org/jeanpan/e2e-testing-example.svg)](https://travis-ci.org/jeanpan/e2e-testing-example)

# e2e-testing-example
An e2e-testing example with nightwatch.js + sauce labs + travis ci + heroku.

## Background
I want to learn how to do end-to-end testing with [Nightwatch.js](http://nightwatchjs.org/) & [SauceLabs](https://saucelabs.com/), also learn the CI with [Travis-ci](https://travis-ci.org/) & [heroku](https://dashboard.heroku.com/).

## Setup
`$npm install`

copy `sample.env` to `.env` and set all the env variables or set env variables directory

```
$export SAUCE_USERNAME=''
$export SAUCE_ACCESS_KEY=''
```

`$npm start`

### Run Tests
- unit test : `$npm run test`

- e2e test with local browsers (chrome) : `$npm run test:e2e`

- e2e test with saucelabs : `$npm run sauce`

## License
The MIT License (MIT)

Copyright (c) 2016 Jean Pan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
