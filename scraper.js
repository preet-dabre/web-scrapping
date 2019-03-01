const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = 'https://marketingplatform.google.com/about/';
  await page.goto(url);
  // await page.screenshot({path: 'example.png'});
  const titles = await page.evaluate(
    () => Array.from(document.querySelectorAll('h4.h-c-tile__headline, h4.product-card__headline')).map((heading) => heading.innerText)
  );

  const svgs = await page.evaluate(
    () => Array.from(document.querySelectorAll('div.h-c-tile__header picture svg')).map((svg) => svg.id)
  );
  console.log(titles);
  console.log(svgs);
  await browser.close();
})();
