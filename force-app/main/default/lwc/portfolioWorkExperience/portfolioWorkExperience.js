/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 04-13-2023
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement, wire, api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
export default class PortfolioWorkExperience extends LightningElement {

    @api recordId;

    @wire(getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId: 'WorkExperiences__r',
        fields: ['WorkExperience__c.JobStartDate__c',
            'WorkExperience__c.JobEndDate__c',
            'WorkExperience__c.Role__c',
            'WorkExperience__c.CompanyName__c',
            'WorkExperience__c.WorkLocation__c',
            'WorkExperience__c.Description__c',
            'WorkExperience__c.IsCurrent__c'
        ]
    }) WorkExperienceHandler({ data, error }) {
        if (data) {
            console.log("WorkExperience Data", JSON.stringify(data));
        }
        if (error) {
            console.error(error);
        }
    }
}