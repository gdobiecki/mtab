import utils from '../utils/utils';

class ResultPage {
    //===== SPONSORED OFFERS
    get firstBikePrice() {
        return $("div.opbox-listing--base section:nth-child(1) > section > article:nth-child(1) div.bf8839e span > span");
    }

    get secondBikePrice() {
        return $("div.opbox-listing--base section:nth-child(1) > section > article:nth-child(2) div.bf8839e span > span");
    }

    // END OF SPONSORED OFFERS

    // FIRST FIVE PROMOTED OFFERS
    get thirdBikePrice() {
        return $("div.opbox-listing--base section:nth-child(2) > section > article:nth-child(1) div.bf8839e span > span");
    }

    get fourthBikePrice() {
        return $("div.opbox-listing--base section:nth-child(2) > section > article:nth-child(2) div.bf8839e span > span");
    }

    get fifthBikePrice() {
        return $("div.opbox-listing--base section:nth-child(2) > section > article:nth-child(3) div.bf8839e span > span");
    }

    get sixthBikePrice() {
        return $("div.opbox-listing--base section:nth-child(2) > section > article:nth-child(4) div.bf8839e span > span");
    }

    get seventhBikePrice() {
        return $("div.opbox-listing--base section:nth-child(2) > section > article:nth-child(5) div.bf8839e span > span");
    }

    get resultCounter() {
        return $("div[class='listing-title__counter'] span");
    }

    get sortingDropDownList() {
        return $("div.opbox-listing-sort div > div > select");
    }

    getNumberOfItemsReturned() {
        return this.resultCounter.getText();
    }

    getFirstBikePrice() {
        return this.firstBikePrice.getText();
    }

    addFirstFiveBikesPrices() {
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

    sortBy(by) {
        this.sortingDropDownList.selectByVisibleText(by);
    }

    getFirstFivePromotedBikePrices() {
        //We ignore sponsored offers
        let thirdBike = parseFloat(utils.convertPriceDisplayedInAllegro(this.thirdBikePrice.getText()));
        let fourthBike = parseFloat(utils.convertPriceDisplayedInAllegro(this.fourthBikePrice.getText()));
        let fifthBike = parseFloat(utils.convertPriceDisplayedInAllegro(this.fifthBikePrice.getText()));
        let sixthBike = parseFloat(utils.convertPriceDisplayedInAllegro(this.sixthBikePrice.getText()));
        let seventhBike = parseFloat(utils.convertPriceDisplayedInAllegro(this.seventhBikePrice.getText()));

        return [thirdBike, fourthBike, fifthBike, sixthBike, seventhBike];
    }

}

export default new ResultPage()