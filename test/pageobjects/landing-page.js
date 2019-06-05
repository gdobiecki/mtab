import Page from './page'

class LandingPage extends Page {
    /**
     * define elements
     */
    get searchInput() {
        return $("input[type = 'search']");
    }

    get searchButton() {
        return $("button[type = 'submit']")
    }

    open() {
        super.open('/');
    }

    searchForItem(item) {
        this.searchInput.waitForDisplayed(5000);
        return this.searchInput.setValue(item);
    }

    clickSearchButton() {
        this.searchButton.waitForDisplayed(5000);
        this.searchButton.click();
    }
}

export default new LandingPage()
