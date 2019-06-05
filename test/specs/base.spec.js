import landingPage from '../pageobjects/landing-page';
import popupWindow from '../pageobjects/popup-window';
import resultPage from '../pageobjects/result-page';

let assert = require('chai').assert;

describe('allegro test suite', function () {
    beforeEach(function () {
        console.log("1234567890")
    });

    it('find first bike\'s price ', function () {
        landingPage.open();
        popupWindow.closePopUp();
        assert.equal(browser.getTitle(), 'Allegro.pl – najlepsze ceny, największy wybór i zawsze bezpieczne zakupy online');

        landingPage.searchForItem('rower')
        landingPage.clickSearchButton();

        const amountOfReturnedItems = resultPage.getAmountOfItems();
        //Amount of bikes offered may change by the time you review this task.
        assert.equal(amountOfReturnedItems, '379 467');

        // let firstBikePrice = resultPage
    });
});
