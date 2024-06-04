import { test, expect, chromium } from '@playwright/test';

test('Validation of URL',async({})=>{
    const browser = await chromium.launch();
    const page = await browser.newPage();
    let firstName,lastName,fullName;
    firstName= "Ashrith";
    lastName= "Yalala";
    fullName = firstName+" "+lastName;
    await page.goto("https://surveyrc.taxcreditco.com/automation-challenge");
    await page.waitForLoadState("domcontentloaded",{timeout:60000});
    await page.locator("[data-question-id-text='VoterFirstName'] input").fill(firstName);
    await page.locator("[data-question-id-text='VoterLastName'] input").fill(lastName);
    await page.locator("[data-question-id-text='VoterEmail'] input").fill("ashrithtest@gmail.com");
    await page.locator("[data-question-id-text='VoterAddressLine1'] input").fill("1502, Kings Street");
    await page.locator("[data-question-id-text='VoterCity'] input").fill("New York");
    await page.locator("[data-question-id-text='VoterPostalCode'] input").fill("39002");
    await page.locator("#SurveyControl_SurveySubmit").click();
    let elementList = await page.$$(".ima-answer-item-container label:last-child");
    for(var i =0;i<elementList.length;i++){
        await elementList[i].click();
    }

    await page.locator("#SurveyControl_SurveySubmit").click();
    let name = await page.locator("[data-question-id-text='NameConfirmation'] input").textContent();
    expect(name).toBe(fullName);
    await page.locator("#SurveyControl_SurveySubmit").click();
    let url = await page.url();
    expect(url).toContain("https://www.experian.com/employer-services");
})