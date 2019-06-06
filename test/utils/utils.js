class Utils {

    /** Price displayed in Allegro contains comma instead of a dot
     *  and ends with "zł" which we need to get rid of
     */

    convertPriceDisplayedInAllegro(priceShowsInAllegro) {
        //let's get rid of " zł"
        priceShowsInAllegro = priceShowsInAllegro.slice(0, -3);
        //let's replace comma with dot
        priceShowsInAllegro = priceShowsInAllegro.replace(/,/g, '.');
        //let's trim whitespace
        priceShowsInAllegro = priceShowsInAllegro.replace(/\s/g, '');

        return priceShowsInAllegro;
    }

}

export default new Utils()