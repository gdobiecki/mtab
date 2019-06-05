import landingPage from '../pageobjects/landing-page';
import popupWindow from '../pageobjects/popup-window';
import resultPage from '../pageobjects/result-page';

let assert = require('chai').assert;

describe('allegro test suite', function () {
    it('find first bike\'s price and number of offers ', function () {
        landingPage.open();
        popupWindow.closePopUp();
        assert.equal(browser.getTitle(), 'Allegro.pl – najlepsze ceny, największy wybór i zawsze bezpieczne zakupy online');

        landingPage.searchForItem('rower')
        landingPage.clickSearchButton();

        let firstBikePrice = resultPage.getFirstBikePrice();
        console.log("First bike's price: " + firstBikePrice);
        //let's get rid of " zł"
        firstBikePrice = firstBikePrice.slice(0, -3);
        //let's replace comma with dot
        firstBikePrice = firstBikePrice.replace(/,/g, '.');

        const numberOfReturnedItems = resultPage.getNumberOfItemsReturned();
        console.log("Number of offers: " + numberOfReturnedItems);

        let priceInPennies = (firstBikePrice * 100).toFixed(2).slice(0, -3);
        assert.isTrue(priceInPennies > numberOfReturnedItems, "Price in pennies should be greater than number of offers");
    });
});
