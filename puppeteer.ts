import puppeteer from 'puppeteer';

const URL = 'https://www.example.com';

// CSS selector of the input field
const inputSelector = 'input[name=example]';

// different inputs to try
const inputs = ['input1', 'input2', 'input3'];

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(URL);

    for (const input of inputs) {
        await page.waitFor(inputSelector);
        await page.type(inputSelector, input);
        // Add any other actions you want to perform after typing in the input
    }

    await browser.close();
})();
