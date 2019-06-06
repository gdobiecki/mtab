import landingPage from '../pageobjects/landing-page';
import popupWindow from '../pageobjects/popup-window';
import resultPage from '../pageobjects/result-page';
import utils from '../utils/utils';

let assert = require('chai').assert;

describe('allegro test suite', function () {
    beforeEach(function () {
        landingPage.open();
        popupWindow.closePopUp();
        assert.equal(browser.getTitle(), 'Allegro.pl – najlepsze ceny, największy wybór i zawsze bezpieczne zakupy online');

        landingPage.searchForItem('rower')
        landingPage.clickSearchButton();
    });

    it('test #1', function () {
        let firstBikePrice = resultPage.getFirstBikePrice();
        console.log("First bike's price: " + firstBikePrice);
        firstBikePrice = utils.convertPriceDisplayedInAllegro(firstBikePrice);

        const numberOfReturnedItems = resultPage.getNumberOfItemsReturned();
        console.log("Number of offers: " + numberOfReturnedItems);

        let priceInPennies = (firstBikePrice * 100).toFixed(2).slice(0, -3);
        assert.isTrue(priceInPennies > numberOfReturnedItems, "Price in pennies should be greater than number of offers");
    });

    it('test #2', function () {
        let firstBikePrice = resultPage.getFirstBikePrice();
        firstBikePrice = utils.convertPriceDisplayedInAllegro(firstBikePrice);

        let sum = resultPage.addFirstFiveBikesPrices();
        if (firstBikePrice < 500) {
            console.log("Value of first five bikes: " + sum);
        }

        let difference = resultPage.getDifferenceBetweenMostExpensiveAndCheapestItem();

        if (firstBikePrice > 721) {
            console.log("Difference between the most expensive and the cheapest bike is: " + difference);
        }

        if (firstBikePrice >= 500 && firstBikePrice <= 721) {
            process.exit(1);
        }
    })
});


