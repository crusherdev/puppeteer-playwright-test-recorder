import {CLICK, HOVER, NAVIGATE_URL, PAGE_SCREENSHOT, SCREENSHOT, SCROLL_TO_VIEW} from "../constants/DOMEventsToRecord";

const importPlayWright = `const playwright = require('playwright');\n`

const wrappedHeader = `(async () => {
  const browser = await playwright["chrome"].launch();
  const page = await browser.newPage()\n`

const wrappedFooter = `  await browser.close()
})()`


export default class CodeGenerator {
    constructor() {

    }

    generate(events: Array<any>){
        return importPlayWright + wrappedHeader + this._handleEvents(events) + wrappedFooter;
    }

    _handleEvents(events: Array<any>){
        let screenShotFileName: string;
        let code = "\n";

        for (let i = 0; i < events.length; i++) {
            const {event_type, selector, value} = events[i];
            switch (event_type) {
                case NAVIGATE_URL:
                    code += `await page.goto('${value}');\n`;
                    break;
                case CLICK:
                    code += `await page.click('${selector}');\n`;
                    break;
                case HOVER:
                    code += `await page.hover('${selector});\n`;
                    break;
                case SCREENSHOT:
                    screenShotFileName = selector.replace(/[^\w\s]/gi, '').replace(/ /g, "_") + `_${i}`;
                    code += `const h_${i} =  await page.$('${selector}');\nh_${i}.screenshot({path: '${screenShotFileName}.png'});\n`
                    break;
                case PAGE_SCREENSHOT:
                    screenShotFileName = value.replace(/[^\w\s]/gi, '').replace(/ /g,"_") + `_${i}`;
                    code += `await page.screenshot({path: '${screenShotFileName}.png'})`;
                    break;
                case SCROLL_TO_VIEW:
                    code += `const stv_${i} =  await page.$('${selector}');\nstv_${i}.scrollIntoViewIfNeeded();\n`
                    break;
                default:
                    console.error("Not supported event");
            }

        }
        return code;
    }
}
