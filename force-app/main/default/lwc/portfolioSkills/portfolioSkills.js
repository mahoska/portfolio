/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 04-14-2023
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import TECH_FIELD from '@salesforce/schema/Portfolio__c.TechnicalSkills__c';
import SOFTWARE_FIELD from '@salesforce/schema/Portfolio__c.SoftwareTools__c';
import SOFT_FIELD from '@salesforce/schema/Portfolio__c.SoftSkills__c';
import METHODOLOGIES_FIELD from '@salesforce/schema/Portfolio__c.SoftwareDevelopmentMethodologies__c';
export default class PortfolioSkills extends LightningElement {

    techSkills = [];
    softSkills = [];
    toolsSkills = [];
    methodologies = [];

    @api recordId;

    @wire(getRecord, {
        recordId: '$recordId',
        fields: [TECH_FIELD, SOFTWARE_FIELD, SOFT_FIELD, METHODOLOGIES_FIELD]
    }) skillHandler({ data, error }) {
        if (data) {
            console.log("Skills Data", JSON.stringify(data));
            this.formatSkills(data);
        }
        if (error) {
            console.error("Skills error: ", error);
        }
    }

    formatSkills(data) {
        const { SoftSkills__c, SoftwareTools__c, SoftwareDevelopmentMethodologies__c, TechnicalSkills__c } = data.fields;
        this.techSkills = TechnicalSkills__c ? TechnicalSkills__c.value.split(',') : [];
        this.softSkills = SoftSkills__c ? SoftSkills__c.value.split(',') : [];
        this.toolsSkills = SoftwareTools__c ? SoftwareTools__c.value.split(',') : [];
        this.methodologies = SoftwareDevelopmentMethodologies__c ? SoftwareDevelopmentMethodologies__c.value.split(',') : [];
    }
}