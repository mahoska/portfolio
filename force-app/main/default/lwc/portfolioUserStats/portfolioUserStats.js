/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 04-07-2023
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';

export default class PortfolioUserStats extends LightningElement {

    trailheadRankImg;
    @api badges = '208+';
    @api points = '180,524+';
    @api trails = '17+';
    @api rank;

    renderedCallback() {
        if (this.rank) {
            let url = `${PortfolioAssets}/PortfolioAssets/Ranks/${this.rank}.png`;
            this.trailheadRankImg = url;
        }
    }
}