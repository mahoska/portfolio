/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 04-14-2023
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SF_CERT_FIELDS from '@salesforce/schema/Portfolio__c.Salesforce_Certification__c';
import OTHER_CERT_FIELDS from '@salesforce/schema/Portfolio__c.OtherCertifications__c';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';

export default class PortfolioCertifications extends LightningElement {

    certLogo = `${PortfolioAssets}/PortfolioAssets/cert_logo.png`;
    sfCertList = [];
    otherCertList = [];

    @api recordId;

    @wire(getRecord, {
        recordId: '$recordId',
        fields: [SF_CERT_FIELDS, OTHER_CERT_FIELDS]
    }) certsHandler({ data, error }) {
        if (data) {
            console.log('certsHandler data:', JSON.stringify(data));
            this.formatData(data);
        }
        if (error) {
            console.error('certsHandler error:', error);
        }
    }

    formatData(data) {
        const { Salesforce_Certification__c, OtherCertifications__c } = data.fields;
        this.sfCertList = Salesforce_Certification__c.value != null ? Salesforce_Certification__c.value.split(';').map(item => {
            return `Salesforce Certified ${item}`
        }) : [];
        this.otherCertList = OtherCertifications__c.value != null ? OtherCertifications__c.value.split(',') : [];
    }

}