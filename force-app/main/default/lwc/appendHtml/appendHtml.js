/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 04-04-2023
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement, api } from 'lwc';

export default class AppendHtml extends LightningElement {

    _result;
    loaded;

    @api
    get result() {
        return this._result;
    }
    set result(data) {
        this._result = data;
        if (this._result) {
            this.attachHtml();
        }
    }

    renderedCallback() {
        if (this._result && !this.loaded) {
            this.attachHtml();
        }
    }

    attachHtml() {
        const container = this.template.querySelector('.htmlcontainer');
        if (container) {
            container.innerHTML = this.result;
            this.loaded = true;
        }
    }
}