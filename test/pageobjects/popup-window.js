import Page from './page'

class PopUpWindow extends Page {

    /**
     * elements on page
     */
    get moveForwardButton ()     {
        return $("//button[text()='przejdź dalej']");
    }

    closePopUp() {
        this.moveForwardButton.waitForDisplayed(5000);
        return this.moveForwardButton.click();
    }


}

export default new PopUpWindow()
