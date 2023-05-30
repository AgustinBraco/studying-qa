import {Selector} from 'testcafe';

fixture `Starting with TestCafe`
    .page `https://www.google.com`;

const googleSearch = Selector("input.gLFyf");
const avatureLink = Selector("h3.LC20lb");
const cookiesButton = Selector("#onetrust-accept-btn-handler");
const contactLink = Selector("#menu-item-27727");
const submitButton = Selector("#enContactUs");
const validationText = Selector("div.ffErrorVal");

test('Avature test', async t => {
    await t
    .setTestSpeed(0.1)
    .typeText(googleSearch, 'avature')
    .pressKey('enter')
    .click(avatureLink)
    .click(cookiesButton)
    .click(contactLink)
    .click(submitButton)
    .takeScreenshot ({ fullPage: true})
    .expect(validationText.innerText).contains('Please enter your first name')
});