const {URL, URLSearchParams} = require("url");
const currency = "USD";
const date_from = "20220707";
const date_to = "20220719";

const base = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange";
//url for first
const url=new URL(base);
url.search = new URLSearchParams ({
    start: date_from,
 end: date_to,
    valcode: currency,
  
});
url.search +="&json";
console.log("URL для запиту:", url.toString());
