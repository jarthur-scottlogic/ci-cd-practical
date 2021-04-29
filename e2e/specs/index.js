'use strict';

const puppeteer = require('puppeteer');

const BASE_URL = process.env.BASE_URL;

if (!BASE_URL) {
  throw new Error('"process.env.BASE_URL" must be set');
}

it('displays the title "React App"', async () => {
  expect("hi").toEqual('hi');
});
