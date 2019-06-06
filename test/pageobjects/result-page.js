import utils from '../utils/utils';

class ResultPage {
    get firstBikePrice() {
        return $("div.opbox-listing--base section:nth-child(1) > section > article:nth-child(1) div.bf8839e span > span");
    }

    get secondBikePrice() {
        return $("div.opbox-listing--base section:nth-child(1) > section > article:nth-child(2) div.bf8839e span > span");
    }

    get thirdBikePrice() {
        return $("div.opbox-listing--base section:nth-child(2) > section > article:nth-child(1) div.bf8839e span > span");
    }

    get fourthBikePrice() {
        return $("div.opbox-listing--base section:nth-child(2) > section > article:nth-child(2) div.bf8839e span > span");
    }

    get fifthBikePrice() {
        return $("div.opbox-listing--base section:nth-child(2) > section > article:nth-child(3) div.bf8839e span > span");
    }

    get resultCounter() {
        return $("div[class='listing-title__counter'] span");
    }

    getNumberOfItemsReturned() {
        this.resultCounter.waitForDisplayed(5000);
        return this.resultCounter.getText();
    }

    getFirstBikePrice() {
        this.firstBikePrice.waitForDisplayed(5000);
        return this.firstBikePrice.getText();
    }

    addFirstFiveBikesPrices() {
        this.firstBikePrice.waitForDisplayed(5000);
        this.secondBikePrice.waitForDisplayed(5000);
        this.thirdBikePrice.waitForDisplayed(5000);
        this.fourthBikePrice.waitForDisplayed(5000);
        this.fifthBikePrice.waitForDisplayed(5000);
        let firstBike = parseFloat(utils.convertPriceDisplayedInAllegro(this.firstBikePrice.getText()));
        let secondBike = parseFloat(utils.convertPriceDisplayedInAllegro(this.secondBikePrice.getText()));
        let thirdBike = parseFloat(utils.convertPriceDisplayedInAllegro(this.thirdBikePrice.getText()));
        let fourthBike = parseFloat(utils.convertPriceDisplayedInAllegro(this.fourthBikePrice.getText()));
        let fifthBike = parseFloat(utils.convertPriceDisplayedInAllegro(this.fifthBikePrice.getText()));

        let sum = firstBike + secondBike + thirdBike + fourthBike + fifthBike;

        return sum.toFixed(2);
    }

    getDifferenceBetweenMostExpensiveAndCheapestItem() {
        let firstBike = parseFloat(utils.convertPriceDisplayedInAllegro(this.firstBikePrice.getText()));
        let secondBike = parseFloat(utils.convertPriceDisplayedInAllegro(this.secondBikePrice.getText()));
        let thirdBike = parseFloat(utils.convertPriceDisplayedInAllegro(this.thirdBikePrice.getText()));
        let fourthBike = parseFloat(utils.convertPriceDisplayedInAllegro(this.fourthBikePrice.getText()));
        let fifthBike = parseFloat(utils.convertPriceDisplayedInAllegro(this.fifthBikePrice.getText()));

        let prices = [firstBike, secondBike, thirdBike, fourthBike, fifthBike];
        let min = Math.min(...prices);
        let max = Math.max(...prices);
        let diff = max - min;

        return diff.toFixed(2);
    }

}

export default new ResultPage()