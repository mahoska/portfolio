/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 03-27-2023
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement } from 'lwc';
import { countryCodeList } from 'c/countryCodeList';
import currencyConverterAssets from '@salesforce/resourceUrl/currencyConverterAssets'
export default class CurrencyConvertorApp extends LightningElement {
    currencyImage = currencyConverterAssets + '/currencyConverterAssets/currency.svg';
    countryList = countryCodeList;
    countryFrom = "USD";
    countryTo = "PLN";

    amount = '';
    result;
    error;


    handleChange(event) {
        const { name, value } = event.target;
        console.log("name", name);
        console.log("value", value);
        this[name] = value;
        this.result = '';
        this.error = '';
    }

    submitHandler(event) {
        event.preventDefault();
        this.convert();
    }


    async convert() {
        var API_URL = `https://api.exchangerate.host/convert?from=${this.countryFrom}&to=${this.countryTo}`;
        try {
            const data = await fetch(API_URL);
            const jsonData = await data.json();
            this.result = (Number(this.amount) * jsonData.result).toFixed(2);
            /*console.log('jsonData', jsonData);
            console.log('amount', this.amount);
            console.log('result', this.result);
            console.log('jsonData.result', jsonData.result);*/

        } catch (error) {
            console.log(error);
            this.error = "An error occurred.  Please try again...";
        }
    }
}