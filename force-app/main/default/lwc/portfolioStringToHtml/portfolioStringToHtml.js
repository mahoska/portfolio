/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 04-14-2023
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement, api } from 'lwc';

export default class PortfolioStringToHtml extends LightningElement {
    @api content;
    isLoaded = false;

    renderedCallback() {
        if (this.isLoaded) {
            return false;
        }
        if (this.content) {
            this.isLoaded = true;
            const container = this.template.querySelector('.htmlContainer');
            container.innerHTML = this.content;
        }
    }

}