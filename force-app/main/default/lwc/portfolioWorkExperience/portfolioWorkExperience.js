/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 04-14-2023
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement, wire, api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
export default class PortfolioWorkExperience extends LightningElement {

    workExperienceList = [];

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
        ],
        sortBy: ['WorkExperience__c.JobStartDate__c']
    }) WorkExperienceHandler({ data, error }) {
        if (data) {
            console.log("WorkExperience Data", JSON.stringify(data));
            this.formatExperience(data);
        }
        if (error) {
            console.error(error);
        }
    }

    formatExperience(data) {
        this.workExperienceList = [...data.records].reverse().map(item => {
            let id = item.id;
            const { JobStartDate__c, JobEndDate__c, Role__c, CompanyName__c, WorkLocation__c, Description__c, IsCurrent__c } = item.fields;
            let JobStartDate = this.getValue(JobStartDate__c);
            let JobEndDate = this.getValue(JobEndDate__c);
            let Role = this.getValue(Role__c);
            let WorkLocation = this.getValue(WorkLocation__c);
            let Description = this.getValue(Description__c);
            let IsCurrent = this.getValue(IsCurrent__c);
            let CompanyName = this.getValue(CompanyName__c);

            return { id, JobStartDate, JobEndDate, Role, WorkLocation, Description, IsCurrent, CompanyName };
        })

        console.log("workExperienceList: ", JSON.stringify(this.workExperienceList));
    }

    getValue(data) {
        return data.displayValue || data.value;
    }
}