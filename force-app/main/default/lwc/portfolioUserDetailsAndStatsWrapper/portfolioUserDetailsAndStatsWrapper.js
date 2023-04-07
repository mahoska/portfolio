/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 04-07-2023
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetailsAndStatsWrapper extends LightningElement {
    @api recordId;
    @api objectApiName;

    @api badges;
    @api points;
    @api trails;
    @api rank;

    @api resumeUrl;


}