const date = "202202";

const NBUURL = new URL('https://bank.gov.ua/NBUStatService/v1/statdirectory/res');

NBUURL.searchParams.append('date', date);
NBUURL.searchParams.append('json', ' ');

console.log(NBUURL.href);
