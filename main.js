const { URL, URLSearchParams } = require('url');

const currency = "USD";
const date_from = "20220707";
const date_to = "20220719";

const base = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange";
const url = new URL(base);


url.search = new URLSearchParams({
  valcode: currency,
  date: date_from
}).toString() + "&json";

console.log("URL для запиту:", url.toString());
