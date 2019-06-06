import Page from './page'

class PopUpWindow extends Page {

    /**
     * elements on page
     */
    get moveForwardButton ()     {
        return $("//button[text()='przejdź dalej']");
    }

    closePopUp() {
        if (this.moveForwardButton.isDisplayed()) {
            return this.moveForwardButton.click();
        }
    }

}

export default new PopUpWindow()
