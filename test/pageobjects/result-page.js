class ResultPage {
    get firstBikePrice() {
        return $
    }

    get resultCounter() {
        return $("span[class='listing-title__counter-value']");
    }

    getAmountOfItems() {
        this.resultCounter.waitForDisplayed(5000);
        return this.resultCounter.getText();
    }
}

export default new ResultPage()