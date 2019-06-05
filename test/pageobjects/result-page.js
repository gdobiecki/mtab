class ResultPage {
    get firstBikePrice() {
        return $("div.opbox-listing--base section article:nth-child(1) div.bf8839e span > span");
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
}

export default new ResultPage()